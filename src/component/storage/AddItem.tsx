'use client';

import { useState } from 'react';
import storage from '@/utils/storage';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const UploadItem = () => {
  const [file, setFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first.');
      return;
    }

    try {
      const storageRef = ref(storage, `items/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDownloadURL(url);
      console.log('File uploaded and available at:', url);
    } catch (e) {
      console.error('Error uploading file:', e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
      <button type="submit">Upload File</button>
      {downloadURL && (
        <p>
          File available at: <a href={downloadURL}>{downloadURL}</a>
        </p>
      )}
    </form>
  );
};

export default UploadItem;
