import Link from 'next/link';

export default function Home() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Minial nocode builder</h1>
          <p className='py-6'>Details will be added</p>
          <Link href='/auth/signup'>
            <a className='btn btn-primary'>Get started</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
