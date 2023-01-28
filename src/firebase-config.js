// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import env from "react-dotenv";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore and get reference to service
export const db = getFirestore(app);
