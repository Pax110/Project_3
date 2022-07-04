import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useFirebase } from "../FirebaseProvider";
import { collection, doc, getDoc } from "firebase/firestore";

export const userAuthContext = createContext({});

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { db, auth } = useFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  async function getUserProfile () {

    let collRef = collection(db, "users");
    let docRef = doc(collRef, user.uid);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
    
      const userInfo = docSnap.data()
   
      return userInfo
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  //user profile from firestore ex profile and pass profile []

  return (
    <userAuthContext.Provider
      value={{ db, user, logIn, signUp, logOut, googleSignIn, getUserProfile }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
