import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8dzO9a4f1aP7bBIdnMAHdNciU-b_1TQI",
    authDomain: "checkerphone-e4c2e.firebaseapp.com",
    projectId: "checkerphone-e4c2e",
    storageBucket: "checkerphone-e4c2e.appspot.com",
    messagingSenderId: "891601599657",
    appId: "1:891601599657:web:a0ed5fcda807c71d0d7db8",
    measurementId: "G-5XHS3ERFW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
