import Image from 'next/image';
import Link from 'next/link';

import backgroundImg from '../images/2circlebg.png';

export default function Home() {
  return (
    <main className='w-screen min-h-screen'>
      <Image
        src={backgroundImg}
        layout='fill'
        className='filter blur-3xl opacity-20'
      />
      <div className='navbar shadow fixed top-0 z-50 text-neutral-content'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>WebQL</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link href='/auth/signin'>
                <a className='transition hover:ring-1 ring-blue-500 hover:shadow-md hover:shadow-blue-500'>
                  Sign In
                </a>
              </Link>
            </li>
            <li>
              <Link href='/auth/signup'>
                <a className='transition hover:ring-1 ring-blue-500 hover:shadow-md hover:shadow-blue-500'>
                  Register
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='hero min-h-screen bg-black'>
        <div className='text-center hero-content text-neutral-content'>
          <div className='max-w-xl'>
            <h1 className='text-5xl font-bold'>
              A minimal nocode webapp builder{' '}
            </h1>
            <p className='py-6 tracking-widest font-medium text-gray-300'>
              An open-source framework to build applications without pain. Build
              applications with modern users interface within seconds.
            </p>
            <Link href='/auth/signup'>
              <a className='btn btn-primary shadow'>Get started</a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
