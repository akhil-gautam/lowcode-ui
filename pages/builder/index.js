import Router from 'next/router';
import { useEffect, useState } from 'react';

import { axios } from '../../axios';
import { AppList } from '../../components/app';
import { DSList } from '../../components/datasource';
import { Layout } from '../../components/Layout';
import { useApp } from '../../store/app';
import { useDatasource } from '../../store/datasource';

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const { setDatasources } = useDatasource();
  const { setApps } = useApp();

  useEffect(async () => {
    try {
      await fetchBuilderData();
    } catch (e) {
      if (e.response.status === 422) {
        Router.push('/auth/signin');
      }
    }
  }, []);

  const fetchBuilderData = async () => {
    setIsLoading(true);
    const data = await axios.get('builders');
    setDatasources(data.data_sources);
    setApps(data.apps);
    setIsLoading(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <section className='h-screen w-screen flex justify-center items-center text-info text-2xl'>
          Loading, please wait...
        </section>
      ) : (
        <section className='flex flex-col'>
          <DSList refetch={fetchBuilderData} />
          <AppList refetch={fetchBuilderData} />
        </section>
      )}
    </Layout>
  );
}
