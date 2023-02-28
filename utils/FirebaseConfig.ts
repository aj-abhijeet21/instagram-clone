// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrFxJOaygZTJRnAtU-pVSwIv8uRJI9JfY',
  authDomain: 'rn-instagram-clone-7ebe9.firebaseapp.com',
  projectId: 'rn-instagram-clone-7ebe9',
  storageBucket: 'rn-instagram-clone-7ebe9.appspot.com',
  messagingSenderId: '158268535993',
  appId: '1:158268535993:web:55c630a4c5de18f7979768',
  measurementId: 'G-XCX54SVL0D',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
