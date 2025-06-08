// Beejoys/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js"; // If you use analytics

// Your web app's Firebase configuration (FROM YOUR SCREENSHOT)
const firebaseConfig = {

    apiKey: "AIzaSyCQ6k68zmgZjC-pMkMPEAa0Z5zV89SyIcQ",

    authDomain: "beejoys-travel.firebaseapp.com",

    projectId: "beejoys-travel",

    storageBucket: "beejoys-travel.firebasestorage.app",

    messagingSenderId: "498599381105",

    appId: "1:498599381105:web:52e9a185e5d5c6a82833d0",

    measurementId: "G-R0RSL79WMF"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app); // If you use analytics

// Export the services for other modules to use
export { app, db, storage, analytics };