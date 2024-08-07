import AddItem from '@/component/firestore/AddItem';
import ListItems from '@/component/firestore/ListItems';
import React from 'react';

const page = () => {
  return (
    <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
      <h1>Welcome to My FireStore</h1>
      <AddItem />
      <ListItems />
    </div>
  );
};

export default page;
