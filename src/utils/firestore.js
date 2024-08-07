import { getFirestore } from 'firebase/firestore';
import firebaseApp from './firebaseConfig.js';

const db = getFirestore(firebaseApp);

export default db;
