import storage from '@/utils/storage';
import { ref, deleteObject } from 'firebase/storage';

type Props = {
  fileName: string;
};

const DeleteItem = ({ fileName }: Props) => {
  const handleDelete = async () => {
    const fileRef = ref(storage, `items/${fileName}`);
    try {
      await deleteObject(fileRef);
      alert('File deleted successfully');
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="border bg-red-400 p-1 rounded text-white"
    >
      Delete File
    </button>
  );
};

export default DeleteItem;
