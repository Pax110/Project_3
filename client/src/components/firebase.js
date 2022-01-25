import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import  "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const config = {
  apiKey: "AIzaSyDa0LD1FY_-s8G9Sq__4jyQaHnCtwVs4O4",
  authDomain: "project-c1c8c.firebaseapp.com",
  projectId: "project-c1c8c",
  storageBucket: "project-c1c8c.appspot.com",
  messagingSenderId: "828436672252",
  appId: "1:828436672252:web:42afbb782a929e5f497179",
  measurementId: "G-D18T0N5LVG",
};

//console.log(`config is : `, config);
const app = firebase.initializeApp(config);

//export const firestore = firebase.firestore();
export const db = getFirestore(app);

export const auth = app.auth();
export default app;

