// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwa2mbIzT75A46eaHnia3DTHmgDR9LORY",
  authDomain: "desenvolvimento-web-768e2.firebaseapp.com",
  projectId: "desenvolvimento-web-768e2",
  storageBucket: "desenvolvimento-web-768e2.firebasestorage.app",
  messagingSenderId: "564430478968",
  appId: "1:564430478968:web:a057a6710b5d1bacf3578d"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase