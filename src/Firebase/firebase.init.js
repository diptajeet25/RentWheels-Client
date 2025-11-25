// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKEPoX8bLFZ4wvAo6ZJ9e82Ei2YcSx278",
  authDomain: "rent-wheels-99c06.firebaseapp.com",
  projectId: "rent-wheels-99c06",
  storageBucket: "rent-wheels-99c06.firebasestorage.app",
  messagingSenderId: "81539882438",
  appId: "1:81539882438:web:a7e2e98f949628b3abe6c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);