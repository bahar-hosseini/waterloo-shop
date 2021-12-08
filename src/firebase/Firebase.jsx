import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyB_HeKTFMVw2gYL9C5piEZjcg-QYK_OY_w",
    authDomain: "waterloo-db.firebaseapp.com",
    projectId: "waterloo-db",
    storageBucket: "waterloo-db.appspot.com",
    messagingSenderId: "207972787991",
    appId: "1:207972787991:web:2c342f09afdb24e38bb952",
    measurementId: "${config.measurementId}"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

firebase.initializeApp(config)
export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
