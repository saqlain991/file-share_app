// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "file-sharing-5ebfb.firebaseapp.com",
  projectId: "file-sharing-5ebfb",
  storageBucket: "file-sharing-5ebfb.appspot.com",
  messagingSenderId: "2349933771",
  appId: "1:2349933771:web:29c17e02ffea7be166a74e",
  measurementId: "G-6YZ9NER8S0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
