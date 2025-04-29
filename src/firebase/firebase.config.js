
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpkG1Wdvpdaq2S9AvarDCRqCY5AdAyg6Y",
  authDomain: "auth-integration-846b5.firebaseapp.com",
  projectId: "auth-integration-846b5",
  storageBucket: "auth-integration-846b5.firebasestorage.app",
  messagingSenderId: "155746696678",
  appId: "1:155746696678:web:efeab6cfe8aca5500a2a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);