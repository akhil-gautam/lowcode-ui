import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-full min-h-screen bg-black'>
      <div className='opacity-50 animate-spin-slow blur-3xl fixed mx-auto'>
        <div className='h-96 w-96 rounded-full bg-sky-100 mb-20'></div>
        <div className='h-96 w-96 rounded-full bg-purple-300'></div>
      </div>
      <div className='navbar shadow fixed top-0 z-50 bg-black/30 md:bg-transparent text-neutral-content backdrop-blur-sm backdrop-filter'>
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
      <div className='w-screen h-full flex flex-col justify-center items-center text-white mt-auto pb-20'>
        <div className='text-center text-neutral-content mt-52'>
          <div className='max-w-xl'>
            <h1 className='text-5xl font-bold'>
              A minimal nocode webapp builder{' '}
            </h1>
            <p className='py-6 tracking-widest text-gray-100'>
              An open-source framework to build applications without pain. Build
              applications with modern users interface within seconds.
            </p>
            <Link href='/auth/signup'>
              <a className='btn btn-primary shadow'>Get started</a>
            </Link>
          </div>
        </div>
        <h2 className='font-extralight mt-10 text-xl bg-blue-400/20 rounded-lg py-1 px-4'>
          Pages built using WebQL look smoking 🔥
        </h2>
        <section className='flex flex-col w-full justify-center items-center px-8 py-4 z-40'>
          <ul className='flex flex-col divide-y bg-sky-100 text-gray-800 p-3 md:p-8 w-screen md:max-w-4xl overflow-x-auto rounded-xl transform md:hover:rotate-2 transition-all'>
            <li className='min-w-max flex items-center bg-white py-3 px-5 text-sm mb-2 font-bold'>
              <span className='w-10'></span>
              <span className='w-32'>Name</span>
              <span className='w-40'>Email</span>
              <span className='w-20'>Role</span>
              <span className='w-32'>Status</span>
              <span className='w-32'>Created at</span>
            </li>
            <li className='min-w-max flex items-center bg-white py-3 px-5 text-sm'>
              <span className='w-10'>
                <input type='checkbox' className='checkbox' />
              </span>
              <span className='text-black font-semibold w-32 overflow-x-scroll'>
                Jane Cooper
              </span>
              <span className='text-blue-600 w-40 overflow-x-auto'>
                jane@example.com
              </span>
              <span className='w-20'>Admin</span>
              <span className='text-center w-32'>
                <span className='px-3 py-1 rounded-lg bg-blue-100 text-blue-700'>
                  active
                </span>
              </span>
              <span className='w-32'>7 minutes ago</span>
            </li>
            <li className='min-w-max flex items-center bg-white py-3 px-5 text-sm'>
              <span className='w-10'>
                <input type='checkbox' className='checkbox' />
              </span>
              <span className='text-black font-semibold w-32 overflow-x-scroll'>
                Marry Lee
              </span>
              <span className='text-blue-600 w-40 overflow-x-auto'>
                marry@example.com
              </span>
              <span className='w-20'>Admin</span>
              <span className='text-center w-32'>
                <span className='px-3 py-1 rounded-lg bg-blue-100 text-blue-700'>
                  active
                </span>
              </span>
              <span className='w-32'>7 minutes ago</span>
            </li>
            <li className='min-w-max flex items-center bg-white py-3 px-5 text-sm'>
              <span className='w-10'>
                <input type='checkbox' className='checkbox' />
              </span>
              <span className='text-black font-semibold w-32 overflow-x-scroll'>
                Pen Austin
              </span>
              <span className='text-blue-600 w-40 overflow-x-auto'>
                p.austin@example.com
              </span>
              <span className='w-20'>Admin</span>
              <span className='text-center w-32'>
                <span className='px-3 py-1 rounded-lg bg-blue-100 text-blue-700'>
                  active
                </span>
              </span>
              <span className='w-32'>7 minutes ago</span>
            </li>
            <li className='min-w-max flex items-center bg-white py-3 px-5 text-sm'>
              <span className='w-10'>
                <input type='checkbox' className='checkbox' />
              </span>
              <span className='text-black font-semibold w-32 overflow-x-scroll'>
                Sheldon Cooper
              </span>
              <span className='text-blue-600 w-40 overflow-x-auto'>
                sheldon@example.com
              </span>
              <span className='w-20'>Admin</span>
              <span className='text-center w-32'>
                <span className='px-3 py-1 rounded-lg bg-blue-100 text-blue-700'>
                  active
                </span>
              </span>
              <span className='w-32'>7 minutes ago</span>
            </li>
          </ul>
          <div className='grid md:grid-cols-3 gap-4 max-w-4xl bg-sky-100 p-8 rounded-xl mt-8 group'>
            <div className='card bg-white text-black md:group-hover:translate-y-5 transition-all'>
              <div className='card-body'>
                <div className='card-title'>Minions</div>
                <p>
                  Minions Kevin, Stuart and Bob decide to find a new master.
                </p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Details</button>
                </div>
              </div>
            </div>
            <div className='card bg-white text-black md:group-hover:-translate-y-5 transition-all'>
              <div className='card-body'>
                <div className='card-title'>Angry Birds</div>
                <p>
                  Angry Birds is a 2009 casual puzzle video game developed by
                  Rovio Entertainment.
                </p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Details</button>
                </div>
              </div>
            </div>
            <div className='card bg-white text-black md:group-hover:translate-y-5 transition-all'>
              <div className='card-body'>
                <div className='card-title'>Raya and the Last Dragon</div>
                <p>
                  Raya, a warrior, sets out to track down Sisu, a dragon, who
                  transferred all her powers.
                </p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-4xl bg-sky-50 text-blue-600 p-8 rounded-xl mt-8 transition-transform duration-500 md:hover:scale-105'>
            <ChartComponent />
          </div>
        </section>
      </div>
    </main>
  );
}

const data = [
  {
    name: 'Accounting',
    jobs: 4000,
  },
  {
    name: 'Advertising',
    jobs: 3000,
  },
  {
    name: 'Animation',
    jobs: 2000,
  },
  {
    name: 'Architecture',
    jobs: 2780,
  },
  {
    name: 'BPO',
    jobs: 1890,
  },
  {
    name: 'Media',
    jobs: 2390,
  },
  {
    name: 'Airline',
    jobs: 3490,
  },
  {
    name: 'Pharma',
    jobs: 3090,
  },
  {
    name: 'Ecommerce',
    jobs: 2000,
  },
  {
    name: 'IT',
    jobs: 1800,
  },
  {
    name: 'Consultant',
    jobs: 590,
  },
  {
    name: 'Entertainment',
    jobs: 5306,
  },
  {
    name: 'NGO',
    jobs: 1388,
  },
  {
    name: 'Shipping',
    jobs: 1500,
  },
];

function ChartComponent() {
  return (
    <ResponsiveContainer width='95%' height={400}>
      <BarChart
        width={700}
        height={300}
        data={data}
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
        <Legend />
        <Bar dataKey='jobs' fill='#570DF8' />
      </BarChart>
    </ResponsiveContainer>
  );
}
