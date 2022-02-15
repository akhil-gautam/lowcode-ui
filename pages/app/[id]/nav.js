import Router from 'next/router';
import { useEffect } from 'react';
import { Loader } from 'react-feather';

import { usePage } from '../../../store/page';

export default function ({ app_id }) {
  const { pages, fetch: fetchPages } = usePage();
  useEffect(async () => {
    await fetchPages(app_id);
  }, []);
  if(pages.length){
    Router.push(`/app/${app_id}/nav/${pages[0].id}`)
  }
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-400 via-yellow-100 to-blue-300'>
      <Loader className='animate-spin mb-5' />
      <div className='font-bold'>Loading your pages...</div>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  return {
    props: {
      app_id: id,
    },
  };
}
