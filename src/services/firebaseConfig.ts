// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV2eNUoVa7WTKrogXEe21QMIjZREFfihs",
  authDomain: "hello-world-910b5.firebaseapp.com",
  projectId: "hello-world-910b5",
  storageBucket: "hello-world-910b5.firebasestorage.app",
  messagingSenderId: "887806025253",
  appId: "1:887806025253:web:dd453d38836b0c52a4e9cc"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
