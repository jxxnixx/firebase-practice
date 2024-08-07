'use client';

import { useState } from 'react';
import realDB from '@/utils/realtimeDB';
import { collection, addDoc } from 'firebase/firestore';
import { push, ref, set } from 'firebase/database';

const AddItem = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const newItemRef = ref(realDB, 'items');
      const newItem = await set(newItemRef, {
        name: value,
      });
      console.log('Document written with ID: ', newItem);

      setValue(''); // Clear the form
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new item"
        style={{ color: 'black' }}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
