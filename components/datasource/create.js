import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Database, Plus, XSquare } from 'react-feather';
import { useForm } from 'react-hook-form';

import { axios } from '../../axios';
import { Button, TextInput } from '../shared';

export default function Create() {
  let [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.post('data_sources', {
        settings: data,
        source,
      });
      toast.success('Created successfully!');
      setIsOpen(false);
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data && Object.values(e.response?.data).forEach(toast.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button type='button' onClick={openModal} className='btn space-x-3'>
        <span>Data source</span>
        <Plus />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-900 opacity-80' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-bold leading-6 text-gray-900 mb-5 flex justify-between items-center'
                >
                  <div>New data source</div>
                  <XSquare
                    className='cursor-pointer'
                    onClick={() => setIsOpen(false)}
                  />
                </Dialog.Title>
                <Dialog.Description as='div'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      className='select select-bordered w-full'
                      onChange={(e) => setSource(e.target.value)}
                    >
                      <option disabled='disabled' selected='selected'>
                        Choose the type of data source
                      </option>
                      <option value='postgres'>Postgres</option>
                      <option value='mysql'>MySQL</option>
                    </select>
                    <TextInput
                      type='text'
                      placeholder='Database name'
                      {...register('dbname')}
                    />
                    <TextInput
                      type='text'
                      defaultValue=''
                      placeholder='Username'
                      {...register('username')}
                    />
                    <TextInput
                      type='password'
                      defaultValue=''
                      placeholder='Password'
                      {...register('password')}
                    />
                    <TextInput
                      type='text'
                      placeholder='Host'
                      {...register('host')}
                    />
                    <TextInput
                      type='text'
                      placeholder='Port'
                      {...register('port')}
                    />
                    <Button
                      type='submit'
                      className='w-full mt-4'
                      isLoading={loading}
                    >
                      Create
                    </Button>
                  </form>
                </Dialog.Description>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
