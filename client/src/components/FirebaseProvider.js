import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

export const FirebaseContext = React.createContext({});

const config = {
 
};
const app = initializeApp(config);
//console.log(`config is : `, config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);
const FirebaseProvider = (props) => {
  const children = props.children;
  const theValues = { db, auth, store };

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
