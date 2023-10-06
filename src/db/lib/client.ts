import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: 'tunify-16646.firebaseapp.com',
  projectId: 'tunify-16646',
  storageBucket: 'tunify-16646.appspot.com',
  messagingSenderId: '203234626463',
  appId: '1:203234626463:web:132c15fd4edb1bc3420baa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
