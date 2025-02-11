import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCADv43D3-ruNPtZBofZW6cvp09HSPzIYo",
  authDomain: "comision-65675.firebaseapp.com",
  projectId: "comision-65675",
  storageBucket: "comision-65675.firebasestorage.app",
  messagingSenderId: "435329705835",
  appId: "1:435329705835:web:b753ccd89a552aca764e2e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
