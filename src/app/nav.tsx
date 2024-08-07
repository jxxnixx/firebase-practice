import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="absolute bg-white h-[100px] w-screen text-black flex flex-row gap-10 justify-center items-center">
      <Link href={'/firestore'}>FireStore</Link>
      <Link href={'/realtimedb'}>Realtime DB</Link>
      <Link href={'/storage'}>Storage</Link>
    </div>
  );
};

export default Nav;
