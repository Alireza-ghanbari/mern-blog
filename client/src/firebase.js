// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-812a1.firebaseapp.com",
  projectId: "mern-blog-812a1",
  storageBucket: "mern-blog-812a1.appspot.com",
  messagingSenderId: "731880120135",
  appId: "1:731880120135:web:39c62c4d68c5d75a94b662",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);