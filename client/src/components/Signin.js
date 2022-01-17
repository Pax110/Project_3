// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Navbar from './navigation/Navbar';
import Footer from './footer/Footer';
import LandingImage from './landingimage/LandingImage';
// Configure Firebase.
const config = {
    apiKey: "AIzaSyDa0LD1FY_-s8G9Sq__4jyQaHnCtwVs4O4",
    authDomain: "project-c1c8c.firebaseapp.com",
    projectId: "project-c1c8c",
    storageBucket: "project-c1c8c.appspot.com",
    messagingSenderId: "828436672252",
    appId: "1:828436672252:web:42afbb782a929e5f497179",
    measurementId: "G-D18T0N5LVG"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>Collective Culinary</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
        
      <Navbar />
      <LandingImage />
      <Footer />
    </div>
  );
}

export default SignInScreen;