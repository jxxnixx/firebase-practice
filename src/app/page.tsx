import AddItem from '@/component/firestore/AddItem';
import ListItems from '@/component/firestore/ListItems';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <Link href={'/firestore'}>FireStore</Link>
      <Link href={'/realtimedb'}>Realtime DB</Link>
    </div>
  );
}
