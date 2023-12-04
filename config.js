import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyDK-61R5PiMyxVqAA3kFz2IH46KBs95MAY",
  authDomain: "todolist-project-669a1.firebaseapp.com",
  projectId: "todolist-project-669a1",
  storageBucket: "todolist-project-669a1.appspot.com",
  messagingSenderId: "337669925806",
  appId: "1:337669925806:web:037d2c03cfad0ef0f4763f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();