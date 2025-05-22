import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrzHAIh5zM6GJUeTBL9yBd-67I_GnUZmo",
  authDomain: "tarefasplus-9938e.firebaseapp.com",
  projectId: "tarefasplus-9938e",
  storageBucket: "tarefasplus-9938e.firebasestorage.app",
  messagingSenderId: "1055992483280",
  appId: "1:1055992483280:web:067d4429911887e36efdd5",
  measurementId: "G-62QJJZ7JF9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };