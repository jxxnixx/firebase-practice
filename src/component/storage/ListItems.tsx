'use client';

import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import storage from '../../utils/storage';
import DeleteItem from './DeleteItem';

type Item = {
  name: string;
  url: string;
};

const ListItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsRef = ref(storage, 'items');
      try {
        const res = await listAll(itemsRef);
        const itemPromises = res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        const itemList = await Promise.all(itemPromises);
        setItems(itemList);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="border w-96 text-center p-4">
      <h2>List of Files</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name} className="border-t-2 p-2">
            <p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </p>
            <DeleteItem fileName={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
