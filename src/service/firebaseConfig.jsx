// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQLqasnaIzqtNywzDjJFkBiLUlwQk-EJM",
  authDomain: "ai-travel-planner-e66d3.firebaseapp.com",
  projectId: "ai-travel-planner-e66d3",
  storageBucket: "ai-travel-planner-e66d3.firebasestorage.app",
  messagingSenderId: "126566956094",
  appId: "1:126566956094:web:c7fe4f115618c5ece2e56f",
  measurementId: "G-WK1MMKMS9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const db = getFirebase(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);