import AddItem from '@/component/storage/AddItem';
import ListItems from '@/component/storage/ListItems';
import React from 'react';

const page = () => {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <h1>Welcome to My Realtime DB</h1>
      <AddItem />
      <ListItems />
    </div>
  );
};

export default page;
