import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto justify-center text-center">
      <div className='px-4 py-16'>
        <img
          src="/banner.png"
          className='w-full h-fit'
        />
      </div>
    </main>
  );
}
