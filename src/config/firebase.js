// Import required Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Added Firebase Storage

// Firebase configuration details
const firebaseConfig = {
  apiKey: "AIzaSyAq41OVco_hXT05MPylVh5PRXgCSEfvugU",
  authDomain: "reworksgames.firebaseapp.com",
  projectId: "reworksgames",
  storageBucket: "reworksgames.appspot.com", // Corrected bucket URL for storage
  messagingSenderId: "175734260496",
  appId: "1:175734260496:web:5855dacd94bfaf317f1b95",
  measurementId: "G-NT2NWDN8BZ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); // Storage Service

// Export Firebase modules for use in other files
export { app, auth, db, storage };
