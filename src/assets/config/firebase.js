// firebase.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth'; // Import the getAuth function

const firebaseConfig = {
    apiKey: "AIzaSyDEByukZ__Laz5GTwiu2y5QnQl63_AKP5s",
    authDomain: "nxthack-it-solutions.firebaseapp.com",
    projectId: "nxthack-it-solutions",
    storageBucket: "nxthack-it-solutions.appspot.com",
    messagingSenderId: "565902235286",
    appId: "1:565902235286:web:42b596c3b449c7215fd4b7",
    measurementId: "G-E8E8N23QP6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Get a reference to the Realtime Database service
const database = getDatabase(app);
// Initialize Auth service
const auth = getAuth(app);
export { app, analytics, database, auth };