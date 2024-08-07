import { getDatabase } from 'firebase/database';
import firebaseApp from './firebaseConfig.js';

const realDB = getDatabase(firebaseApp);

export default realDB;
