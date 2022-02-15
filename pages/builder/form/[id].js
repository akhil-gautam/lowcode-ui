import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { axios } from '../../../axios';
import { Layout } from '../../../components/Layout';
import { Button, TextInput } from '../../../components/shared';

export default function ({ form_id }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    await fetchForm();
  }, []);

  const fetchForm = async () => {
    const response = await axios.get(`forms/${form_id}`);
    setForm(response);
  };

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.patch('forms', {
        form: data,
      });
      toast.success('Updated successfully!');
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data && Object.values(e.response?.data).forEach(toast.error);
    } finally {
      setLoading(false);
    }
  };

  if (!form) {
    return (
      <div className='flex justify-center items-center text-error font-semibold h-screen'>
        Loading form...
      </div>
    );
  }
  return (
    <Layout>
      <section className='w-full md:w-1/2 self-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label='Title'
            type='text'
            defaultValue={form.title}
            placeholder='Form title'
            {...register('title')}
          />
          <label className='form-group form-control mt-4'>
            <span className='label-text font-semibold text-gray-700 mb-2'>
              Form query
            </span>
            <textarea
              className='textarea h-32 textarea-bordered mb-1'
              placeholder='Form query'
              defaultValue={form.form_query}
              {...register('form_query', {
                required:
                  'Put form fields in curly braces like {{first_name}} where first_name is a column in the table.',
              })}
            ></textarea>
            <span className='label-text-alt'>
              Query to save form fields in the DB
            </span>
          </label>
          <Button type='submit' className='w-full mt-4' isLoading={loading}>
            Update
          </Button>
        </form>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { form_id: query.id }, // will be passed to the page component as props
  };
}
