// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrfZ6RQFrS7WU2t5TQ_mExSHz_wqeGVl0",
  authDomain: "clean-co-services.firebaseapp.com",
  projectId: "clean-co-services",
  storageBucket: "clean-co-services.appspot.com",
  messagingSenderId: "627572600997",
  appId: "1:627572600997:web:a702230433d2490d735d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;