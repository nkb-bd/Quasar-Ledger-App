// db.js

import * as firebase from 'firebase'
let config = {
  apiKey: "AIzaSyCQo5S5l8LLm_d1LIRifVOmd-_CSEXi5L8",
  authDomain: "vue-firebase-1-b3001.firebaseapp.com",
  databaseURL: "https://vue-firebase-1-b3001.firebaseio.com",
  projectId: "vue-firebase-1-b3001",
  storageBucket: "vue-firebase-1-b3001.appspot.com",
  messagingSenderId: "636174946136",
  appId: "1:636174946136:web:2e43516d2ff65565071f2d"
};


const fireApp = firebase.initializeApp(config)

export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
}

