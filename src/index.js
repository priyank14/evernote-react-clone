import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require("firebase/firestore")
firebase.initializeApp({
  apiKey: "AIzaSyBXhrLwgoHdbsyJxhMqeAFoX7u6-TdKGo0",
  authDomain: "evernote-379ff.firebaseapp.com",
  databaseURL: "https://evernote-379ff.firebaseio.com",
  projectId: "evernote-379ff",
  storageBucket: "evernote-379ff.appspot.com",
  messagingSenderId: "599049051582",
  appId: "1:599049051582:web:139c33c84e63fad82e6def",
  measurementId: "G-P7WKYBY1JF"
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
