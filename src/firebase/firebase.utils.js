import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGExLTLSVfymOal7iSTQePcSDLhoM4eAQ",
  authDomain: "crwn-clothing-152ac.firebaseapp.com",
  databaseURL: "https://crwn-clothing-152ac.firebaseio.com",
  projectId: "crwn-clothing-152ac",
  storageBucket: "crwn-clothing-152ac.appspot.com",
  messagingSenderId: "637417351453",
  appId: "1:637417351453:web:f14cb02f5518237e11d9f4",
  measurementId: "G-8C34LNNZK2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // storing user data in our DB
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    // for creating data/snapShots we use DocRef where snapShot=> represents data
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
