export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS6Kfin-C5kF3q1JgvF2miokQ5KOGuyAc",
  authDomain: "fantasy-5c9a8.firebaseapp.com",
  databaseURL: "https://fantasy-5c9a8-default-rtdb.firebaseio.com",
  projectId: "fantasy-5c9a8",
  storageBucket: "fantasy-5c9a8.appspot.com",
  messagingSenderId: "710501014345",
  appId: "1:710501014345:web:602c41562b9ce2e801d898",
  measurementId: "G-YV1RNZ6TG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);