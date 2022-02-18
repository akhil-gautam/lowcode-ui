import { useState } from 'react';
import { Edit } from 'react-feather';
import { CreateDS, DBConsole, EditDS } from '.';
import { useDatasource } from '../../store/datasource';

export default function DSList({ refetch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDS, setCurrentDS] = useState();
  const { data_sources } = useDatasource();

  const handleEdit = (data_source) => {
    setCurrentDS(data_source);
    setIsOpen(true);
  };

  if (data_sources.length == 0) {
    return (
      <div className='flex flex-col items-center justify-center space-y-5 px-4 py-16 border border-base-300'>
        <div className='font-medium tracking-wide text-xl text-red-500'>
          You haven&apos;t added any data source yet!
        </div>
        <CreateDS refetch={refetch} />
      </div>
    );
  }

  return (
    <>
      {isOpen && (
        <EditDS
          data_source={currentDS}
          refetch={refetch}
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      )}
      <h3 className='font-semibold text-2xl mb-2'>Data sources</h3>
      <div className='grid md:grid-cols-3 gap-4 mb-8'>
        {data_sources.map(({ id, source, settings }, idx) => (
          <div className='card card-compact bg-white' key={id}>
            <div className='card-body'>
              <h2 className='card-title capitalize'>{source}</h2>
              {Object.keys(settings).map((key, index) => (
                <div className='flex space-x-1 text-sm' key={index}>
                  <span className='capitalize font-semibold'>{key}:</span>
                  <span>{settings[key]}</span>
                </div>
              ))}
              <div className='card-actions justify-center md:justify-end space-x-2 items-center md:border-none border-t md:mt-4 md:pt-0 mt-4 pt-4'>
                <button
                  className='flex items-center space-x-2 bg-purple-500 text-white font-semibold py-1 px-10 hover:bg-purple-300 rounded-lg'
                  onClick={() => handleEdit(data_sources[idx])}
                >
                  <div>Edit</div>
                  <div>
                    <Edit />
                  </div>
                </button>
                <DBConsole data_source_id={id} />
              </div>
            </div>
          </div>
        ))}
        <CreateDS refetch={refetch} />
      </div>
    </>
  );
}
