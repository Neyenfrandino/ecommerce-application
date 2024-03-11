import {initializeApp} from 'firebase/app'

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBzvxBIQxKWb3s52pHeu3zyG1Y2escZbRU",
    authDomain: "crwn-clothing-db-15624.firebaseapp.com",
    projectId: "crwn-clothing-db-15624",
    storageBucket: "crwn-clothing-db-15624.appspot.com",
    messagingSenderId: "89544506084",
    appId: "1:89544506084:web:b7ec936acd483b63bdcaf1"
  };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithPopupp = () => signInWithPopup(auth, provider)

export const db = getFirestore(firebaseApp)

export const CreteUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'user', userAuth.uid)
  
  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  console.log(userSnapShot);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth
    const createAt = new Date()

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    }catch(error){
      console.log('Error creating the user', error.message)
    }
    
    return userDocRef

  }
}