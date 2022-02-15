import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { axios } from '../../axios';
import { Details } from '../datasource';
import { Button } from '../shared';

export default function ({ component: { id, heading, settings } }) {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [queryResult, setQueryResult] = useState([]);

  useEffect(async () => {
    await fetchResult();
  }, []);

  const fetchResult = async () => {
    try {
      const response = await axios.get(`components/${id}/exec_query`);
      setQueryResult(response.result);
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data && toast.error(e.response?.data.exception);
    } finally {
      setLoading(false);
    }
  };

  const showDetails = (data) => {
    setIsOpen(true);
    setCurrentData(data);
  };

  if (isLoading) {
    return <div>Loading query results</div>;
  }

  if (
    !queryResult ||
    ((length = queryResult.length), queryResult.length === 0)
  ) {
    return (
      <div className='text-error font-semibold text-center text-xl'>
        No data available for component's query!
      </div>
    );
  }

  return (
    <>
      {isOpen && (
        <Details data={currentData} onClose={() => setIsOpen(false)} />
      )}
      <div className='bg-white p-4 shadow rounded-xl'>
        <header className='font-bold text-slate-800 mb-4 text-xl pl-1'>
          {heading}
        </header>
        <section className='grid md:grid-cols-3 gap-8'>
          {queryResult.map((result) => (
            <article className='card border-2 rounded-none border-gray-700 hover:bg-blue-50 transition-all hover:shadow-2xl'>
              <div className='card-body p-2'>
                <h2 className='card-title'>{result[settings.body]}</h2>
                <div>{result[settings.header]}</div>
                <Button
                  className='btn-block rounded-none mt-4'
                  onClick={() => showDetails(result)}
                >
                  Details
                </Button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
