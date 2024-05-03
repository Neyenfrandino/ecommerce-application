import {initializeApp} from 'firebase/app'

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } 
from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, Firestore, collection, writeBatch, query, getDocs } from 'firebase/firestore'


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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  });

  await batch.commit()
  console.log('done')

}

export const CategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef)

  const querySnapShop = await getDocs(q)
  const categoryMap = querySnapShop.docs.reduce((acc, docSnapShop)=>{
    const { title, items } = docSnapShop.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

export const CreateUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth)return

  const userDocRef = doc(db, 'user', userAuth.uid)
  
  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot.exists());
  // console.log(userSnapShot);

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
    // console.log('Usuario creado exitosamente:', userCredential.user.uid);
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

    // console.log('Successful session initialization', initalSession)
    return initalSession

  }catch(error){
    console.error('Initial session error', error.message)
    throw error
  }
}

export const SingOutUser = async () => await signOut(auth) 


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

