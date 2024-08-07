// app/components/ListItems.js
'use client';

import { useEffect, useState } from 'react';
import realDB from '@/utils/realtimeDB';
import { collection, getDocs } from 'firebase/firestore';
import DeleteItem from './DeleteItem';
import { onValue, ref } from 'firebase/database';

const ListItems = () => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const itemsRef = ref(realDB, 'items');

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemList = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setItems(itemList);

      console.log(itemList);
    });
  }, []);

  return (
    <div className="border w-96 text-center p-4">
      <h2>List of Items</h2>
      <ul>
        {items.map((item: any) => (
          <li key={item.id} className="border-t-2 p-2">
            <p>
              {Object.keys(item)
                .filter((subKey) => subKey !== 'id')
                .map((subKey) => item[subKey])
                .join('')}
            </p>
            <DeleteItem id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
