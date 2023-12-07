import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/generated.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2gnrqApzxQ28QB3-4s64YPEK9ZzFpD5w",
  authDomain: "personal-website-bws.firebaseapp.com",
  databaseURL: "https://personal-website-bws-default-rtdb.firebaseio.com",
  projectId: "personal-website-bws",
  storageBucket: "personal-website-bws.appspot.com",
  messagingSenderId: "265080365893",
  appId: "1:265080365893:web:04e55d364a45b54fc2d42c",
  measurementId: "G-GEW9F79L9E"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}