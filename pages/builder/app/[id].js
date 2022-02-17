import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { axios } from '../../../axios';
import { Layout } from '../../../components/Layout';
import { FormList } from '../../../components/form';
import { PageList } from '../../../components/page';
import { Button, TextInput } from '../../../components/shared';
import { useDatasource } from '../../../store/datasource';

export default function ({ app_id }) {
  const [loading, setLoading] = useState(false);
  const [app, setApp] = useState(null);

  const { register, handleSubmit } = useForm();

  const { data_sources, fetch: fetchDS } = useDatasource();

  useEffect(async () => {
    await fetchDS();
    await fetchApp();
  }, []);

  const fetchApp = async () => {
    const response = await axios.get(`apps/${app_id}`);
    setApp(response);
  };

  const onUpdate = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.put(`apps/${app_id}`, { app: data });
      toast.success('Updated successfully!');
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data && Object.values(e.response?.data).forEach(toast.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Link href='/builder'>
        <a className='btn btn-link self-start underline underline-offset-2'>
          <span>Back to builder</span>
        </a>
      </Link>
      <section className='flex flex-col md:flex-row items-start w-full'>
        {app ? (
          <form
            onSubmit={handleSubmit(onUpdate)}
            className='w-full md:w-1/2 px-3 py-5 rounded-xl my-0 md:mb-10 bg-white'
          >
            <header className='text-xl uppercase font-bold mb-5'>
              {app?.name?.replace('_', ' ')}
            </header>
            <label className='flex flex-col'>
              <div className='label-text mb-1 font-semibold text-gray-600'>
                Data source
              </div>
              <select
                className='select select-bordered w-full mb-4'
                defaultValue={
                  data_sources.find(({ id }) => id === app.data_source_id)?.id
                }
                {...register('data_source_id')}
              >
                <option>Choose your data source</option>
                {data_sources.map(({ id, settings: { dbname } }) => (
                  <option key={id} value={id}>
                    {dbname}
                  </option>
                ))}
              </select>
            </label>
            <TextInput
              type='text'
              label='Application name'
              placeholder='Application name'
              defaultValue={app.name}
              {...register('name')}
            />
            <Button
              type='submit'
              className='w-full btn-secondary mt-4'
              isLoading={loading}
            >
              Update
            </Button>
          </form>
        ) : (
          <div>Loading app...</div>
        )}
        {/* right section containing pages and forms*/}
        <section className='w-full md:w-1/2 space-y-10 px-2 md:px-10 divide-y divide-dashed divide-blue-700'>
          <PageList app_id={app_id} />
          <FormList app_id={app_id} />
        </section>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { app_id: query.id }, // will be passed to the page component as props
  };
}