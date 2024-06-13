// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDc5018DHEWaMZmpVWwwaLshDRmFrb32yk',
  authDomain: 'medical-search-engine-92f3b.firebaseapp.com',
  projectId: 'medical-search-engine-92f3b',
  storageBucket: 'medical-search-engine-92f3b.appspot.com',
  messagingSenderId: '835973451837',
  appId: '1:835973451837:web:011279168a8a4ca1785a54',
  measurementId: 'G-CZ9WFJ5HNC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
