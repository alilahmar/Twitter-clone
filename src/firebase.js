import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWP-dty4J2jO_zyHMRCCN4u3R70CmeB04",
  authDomain: "twitter-clone-f9e24.firebaseapp.com",
  projectId: "twitter-clone-f9e24",
  storageBucket: "twitter-clone-f9e24.appspot.com",
  messagingSenderId: "623551357242",
  appId: "1:623551357242:web:02247fa4243f8bda333003",
  measurementId: "G-MMV88BS9RL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
