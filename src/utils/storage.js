import { getStorage } from 'firebase/storage';
import firebaseApp from './firebaseConfig.js';

const storage = getStorage(firebaseApp);

export default storage;
