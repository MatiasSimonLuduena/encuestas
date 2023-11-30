import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJEjZfVk4Mr6M9FntbwpxuhQU1sWeCel8",
  authDomain: "encuesta-75810.firebaseapp.com",
  projectId: "encuesta-75810",
  storageBucket: "encuesta-75810.appspot.com",
  messagingSenderId: "336700729405",
  appId: "1:336700729405:web:7b5e16be6d28cf69192254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);