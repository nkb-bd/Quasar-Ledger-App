// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQo5S5l8LLm_d1LIRifVOmd-_CSEXi5L8",
  authDomain: "vue-firebase-1-b3001.firebaseapp.com",
  databaseURL: "https://vue-firebase-1-b3001.firebaseio.com",
  projectId: "vue-firebase-1-b3001",
  storageBucket: "vue-firebase-1-b3001.appspot.com",
  messagingSenderId: "636174946136",
  appId: "1:636174946136:web:5b42a9e5bb6e4c5f071f2d"
};
// Initialize Firebase
let firebaseApp =  firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
export {firebaseAuth , firebaseDb }

