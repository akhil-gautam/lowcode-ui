import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { axios } from '../../axios';

export default function Chart({ component: { id, heading = '', settings } }) {
  const [isLoading, setLoading] = useState(true);
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

  if (isLoading) {
    return <div>Loading query results</div>;
  }

  let length;

  if (
    !queryResult ||
    ((length = queryResult.length), queryResult.length === 0)
  ) {
    return (
      <div className='text-error font-semibold text-center text-xl'>
        No data available for component&apos;s query!
      </div>
    );
  }

  return (
    <div className='p-4 shadow rounded-xl bg-white'>
      {heading.length && (
        <header className='font-bold text-slate-800 mb-4 text-xl px-5'>
          {heading}
        </header>
      )}
      <ResponsiveContainer width='95%' height={400}>
        <BarChart
          height={300}
          data={queryResult}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          {settings.legend?.length ? (
            <Legend
              content={() => (
                <div className='text-center font-semibold text-sm'>
                  {settings.legend}
                </div>
              )}
            />
          ) : (
            <Legend />
          )}
          <Bar dataKey='count' fill='#6c5fb3' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
