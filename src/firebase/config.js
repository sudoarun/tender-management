import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "assign-tender-management.firebaseapp.com",
  projectId: "assign-tender-management",
  storageBucket: "assign-tender-management.appspot.com",
  messagingSenderId: "252601275352",
  appId: "1:252601275352:web:237aa78f972199465bd8ad",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
