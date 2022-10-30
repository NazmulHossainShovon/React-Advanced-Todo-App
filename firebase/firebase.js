import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqnuHLDDQ8z6cKVpZsYXWQw7-x9E9O46I",
  authDomain: "crwn-clothing-db-3e489.firebaseapp.com",
  projectId: "crwn-clothing-db-3e489",
  storageBucket: "crwn-clothing-db-3e489.appspot.com",
  messagingSenderId: "866615073431",
  appId: "1:866615073431:web:f0221bf199a1b0f56827d2",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const colRef = collection(db, "tasks");

export const addNewDocument = (taskToAdd) => {
  addDoc(colRef, {
    taskToAdd,
  });
};
