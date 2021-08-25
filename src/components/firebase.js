import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyCoN2yK6imym4_VZjro5uRLH_XCIx3nouU",
  authDomain: "chatsquare-eece1.firebaseapp.com",
  projectId: "chatsquare-eece1",
  storageBucket: "chatsquare-eece1.appspot.com",
  messagingSenderId: "973000234715",
  appId: "1:973000234715:web:82bd96456baf1747005efe"
}).auth();