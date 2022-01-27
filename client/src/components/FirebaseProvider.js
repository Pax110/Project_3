import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const FirebaseContext = React.createContext({});

const config = {
  apiKey: "AIzaSyDa0LD1FY_-s8G9Sq__4jyQaHnCtwVs4O4",
  authDomain: "project-c1c8c.firebaseapp.com",
  projectId: "project-c1c8c",
  storageBucket: "project-c1c8c.appspot.com",
  messagingSenderId: "828436672252",
  appId: "1:828436672252:web:42afbb782a929e5f497179",
  measurementId: "G-D18T0N5LVG",
};
const app = initializeApp(config);
//console.log(`config is : `, config);
export const auth = getAuth(app);
export const db = getFirestore(app);
const FirebaseProvider = (props) => {
  const children = props.children;
  const theValues = { db, auth };

  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

export function useFirebase() {
  return useContext(FirebaseContext);
}
