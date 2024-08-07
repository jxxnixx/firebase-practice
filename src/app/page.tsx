import AddItem from '@/component/AddItem';
import ListItems from '@/component/ListItems';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <h1>Welcome to My Next.js App</h1>
      <AddItem />
      <ListItems />
    </div>
  );
}
