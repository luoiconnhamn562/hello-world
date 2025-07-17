// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV2eNUoVa7WTKrogXEe21QMIjZREFfihs",
  authDomain: "hello-world-910b5.firebaseapp.com",
  projectId: "hello-world-910b5",
  storageBucket: "hello-world-910b5.firebasestorage.app",
  messagingSenderId: "887806025253",
  appId: "1:887806025253:web:dd453d38836b0c52a4e9cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
