import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnFTTN18sqYcVfzpnXz77Z35L5rXBSNTc",
  authDomain: "chatgpt-messenger-ankit.firebaseapp.com",
  projectId: "chatgpt-messenger-ankit",
  storageBucket: "chatgpt-messenger-ankit.appspot.com",
  messagingSenderId: "735763037626",
  appId: "1:735763037626:web:c3e81467a24fac56a67183"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db} ;