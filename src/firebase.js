import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAF6gCkEVnJ63ftXKISjC3Yxc5vz-uoaoY",
  authDomain: "disneyplus-clone-d627e.firebaseapp.com",
  projectId: "disneyplus-clone-d627e",
  storageBucket: "disneyplus-clone-d627e.appspot.com",
  messagingSenderId: "1016957259615",
  appId: "1:1016957259615:web:20a4f2a7ad720edeb6b0ea",
  measurementId: "G-FS75YHFD27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
