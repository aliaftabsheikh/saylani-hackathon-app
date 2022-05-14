import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCc6dj7oISQJJ2sxpk1Po-xueu-KnuSjwI",
    authDomain: "smit-final-hackathon.firebaseapp.com",
    projectId: "smit-final-hackathon",
    storageBucket: "smit-final-hackathon.appspot.com",
    messagingSenderId: "104287219913",
    appId: "1:104287219913:web:00825e9f45590387451d18",
    measurementId: "G-55EE67RVNC"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore (app);
  const stateChange = onAuthStateChanged;

  export {db , firebaseConfig, auth, stateChange}
  