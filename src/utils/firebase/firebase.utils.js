import {initializeApp} from 'firebase/app'

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } 
from 'firebase/auth'

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore(firebaseApp)

export const CreateUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth)return

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
        createAt,
        ...additionalInformation
      })
    }catch(error){
      console.log('Error creating the user', error.message)
    }
    
    return userDocRef

  }
}


export const createAuthWithEmailAndPassword = async (email, password) => {
  try {
    if(!email || !password)return
    // Crea un nuevo usuario con correo electrónico y contraseña
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Usuario creado exitosamente:', userCredential.user.uid);
    return userCredential;

  } catch (error) {
    // Captura cualquier error que ocurra durante la creación del usuario
    console.error('Error al crear usuario:', error.message);
    throw error;
  }
}


export const SignInAuthWithEmailAndPassword = async (email, password) =>{

  try{
    if(!email || !password) return
    const initalSession = await signInWithEmailAndPassword(auth, email, password)

    console.log('Successful session initialization', initalSession)
    return initalSession

  }catch(error){
    console.error('Initial session error', error.message)
    throw error
  }
}