import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Welcome from './Welcome/Welcome'
import Hype from './Hype/Hype'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from 'firebase/app';
import 'firebase/auth';



const config = ({
  // your config
  apiKey: "AIzaSyDf-HFJsc7S3yUd2IrJ3ctyLCDN1rAbuhU",
  authDomain: "honey-biscuit.firebaseapp.com",
  databaseURL: "https://honey-biscuit.firebaseio.com",
  projectId: "honey-biscuit",
  storageBucket: "honey-biscuit.appspot.com",
  messagingSenderId: "673145215343",
  appId: "1:673145215343:web:a54d2d0704da0e5b91b09a",
  measurementId: "G-7RJ3YXR4CP"
})

firebase.initializeApp(config);
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

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
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in! Now go fuck yourself!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}


export default SignInScreen;
{/* <Header />
<Welcome />
<Hype /> */}