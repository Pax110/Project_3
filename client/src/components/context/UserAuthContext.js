import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function updateEmail(email){
    return user.updateEmail(email)
  }
  function updatePassword(password){
      return user.updatePassword(password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      console.log("currentUser email",currentuser.email)
      console.log("curreuser name",currentuser.displayName)
      console.log(currentuser.emailVerified)
      console.log(currentuser.metadata)
      console.log(currentuser.uid)
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,updateEmail,updatePassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  console.log("useContext with userAuthContext",userAuthContext)
  return useContext(userAuthContext);
}
