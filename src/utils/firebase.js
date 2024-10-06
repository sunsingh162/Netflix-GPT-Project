// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuP4yhDS7LykZZ_e6EpXCJjneNFaUyw6E",
  authDomain: "netflix-gpt-1c972.firebaseapp.com",
  projectId: "netflix-gpt-1c972",
  storageBucket: "netflix-gpt-1c972.appspot.com",
  messagingSenderId: "922612348562",
  appId: "1:922612348562:web:e823ccec460f53e6b3584b",
  measurementId: "G-04SCF7XGCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();