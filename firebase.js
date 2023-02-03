import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTn-xWUbYn0as6ZmLQcXqqDSLY4x-T4So",
  authDomain: "cosmosis-ff4d9.firebaseapp.com",
  projectId: "cosmosis-ff4d9",
  storageBucket: "cosmosis-ff4d9.appspot.com",
  messagingSenderId: "612922768943",
  appId: "1:612922768943:web:f282242aa81aa12d4790da",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
