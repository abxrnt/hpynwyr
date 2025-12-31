import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4p3HnfZ0_e-8ghcHYo1FG4u-ywfGv3L8",
  authDomain: "study-b5df9.firebaseapp.com",
  projectId: "study-b5df9",
  storageBucket: "study-b5df9.firebasestorage.app",
  messagingSenderId: "149030701226",
  appId: "1:149030701226:web:f94b25e63e0c4af9c728d3",
  measurementId: "G-YV4EEYL070"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
