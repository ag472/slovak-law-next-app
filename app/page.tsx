import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Slovak Law App</h1>
      <p className="mb-8">Explore our <Link href="/about"><a className="text-blue-500 underline">About</a></Link> page.</p>
    </div>
  );
}
