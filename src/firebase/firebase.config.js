// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2xbFbsksn3jR_CiRx51WI0hGYVhBB6c",
  authDomain: "coders-man-education.firebaseapp.com",
  projectId: "coders-man-education",
  storageBucket: "coders-man-education.appspot.com",
  messagingSenderId: "38656112249",
  appId: "1:38656112249:web:a9e5566f30f2bf54abc6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;