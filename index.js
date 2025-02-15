import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBawg_qcByeRfhOhpRHCOQmjrNwwcX8QJk",
    authDomain: "ai-personalized-learning-867d0.firebaseapp.com",
    projectId: "ai-personalized-learning-867d0",
    storageBucket: "ai-personalized-learning-867d0.appspot.com", // Corrected
    messagingSenderId: "671404256403",
    appId: "1:671404256403:web:0b0c9af95450a99c393166",
    measurementId: "G-LG9W7X1HN0"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { auth };
