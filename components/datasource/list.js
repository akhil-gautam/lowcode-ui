import { CreateDS, DBConsole } from '.';
import { useDatasource } from '../../store/datasource';

export default function ({ refetch }) {
  const { data_sources } = useDatasource();
  if (data_sources.length == 0) {
    return (
      <div className='flex flex-col items-center justify-center space-y-5 px-4 py-16 border border-base-300'>
        <div className='font-medium tracking-wide text-xl text-red-500'>
          You haven't added any data source yet!
        </div>
        <CreateDS />
      </div>
    );
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-2xl'>Data sources</h3>
        <CreateDS />
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {data_sources.map(({ id, source, settings }) => (
          <div className='card bg-white' key={id}>
            <div className='card-body'>
              <h2 className='card-title capitalize'>{source}</h2>
              {Object.keys(settings).map((key, index) => (
                <div className='flex space-x-1 text-sm' id={index}>
                  <span className='capitalize font-semibold'>{key}:</span>
                  <span>{settings[key]}</span>
                </div>
              ))}
              <div className='card-actions justify-end'>
                <DBConsole data_source_id={id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
