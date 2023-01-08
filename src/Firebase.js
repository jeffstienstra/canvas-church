// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONFIG_API_KEY,
    authDomain: "canvas-church-484a2.firebaseapp.com",
    projectId: "canvas-church-484a2",
    storageBucket: "canvas-church-484a2.appspot.com",
    messagingSenderId: "829270733059",
    appId: "1:829270733059:web:b8ef775d2a4e1f43267936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);