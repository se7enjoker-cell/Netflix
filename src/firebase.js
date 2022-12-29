// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfc4QlQe46EaJaIQ6on_RVVyoJ-DoKW-U",
  authDomain: "netflix-82cd3.firebaseapp.com",
  projectId: "netflix-82cd3",
  storageBucket: "netflix-82cd3.appspot.com",
  messagingSenderId: "929725735464",
  appId: "1:929725735464:web:79157a0d9d2e76e94b4b1d",
  measurementId: "G-S0YL99YPWD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


