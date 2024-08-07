import { ref, remove } from 'firebase/database';
import realDB from '@/utils/realtimeDB';
import { doc, deleteDoc } from 'firebase/firestore';

const DeleteItem = ({ id }: any) => {
  const handleDelete = async () => {
    const itemRef = ref(realDB, `items/${id}`);
    try {
      await remove(itemRef);
      alert('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting document: ', error);
      alert('Error deleting item');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="border bg-red-400 p-1 rounded text-white"
    >
      Delete Item
    </button>
  );
};

export default DeleteItem;
