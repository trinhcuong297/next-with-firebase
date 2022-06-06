// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFixLBoIgdeMge2ybeM6nd6Po7opANz5k",
  authDomain: "nextjs-with-firebase-iot.firebaseapp.com",
  databaseURL: "https://nextjs-with-firebase-iot-default-rtdb.firebaseio.com",
  projectId: "nextjs-with-firebase-iot",
  storageBucket: "nextjs-with-firebase-iot.appspot.com",
  messagingSenderId: "382110968758",
  appId: "1:382110968758:web:a03b8fa720392c7d732f17",
  measurementId: "G-XWSNCPF7JY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
