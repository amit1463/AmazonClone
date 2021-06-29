import firebase from "firebase"
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAzQ0Kk22LbPI7RuDdABGfPrFnhldIgeeE",
    authDomain: "clone-b3f23.firebaseapp.com",
    projectId: "clone-b3f23",
    storageBucket: "clone-b3f23.appspot.com",
    messagingSenderId: "907521016563",
    appId: "1:907521016563:web:b39bb06bbe73a664c56d86",
    measurementId: "G-HZQFCB4RVJ"
  });
  const db=firebase.firestore();
  export {db};