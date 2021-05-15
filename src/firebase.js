import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOgRIxpKfHf9vz3j8MsE_1mGENYfv4WFk",
  authDomain: "clone-23.firebaseapp.com",
  projectId: "clone-23",
  storageBucket: "clone-23.appspot.com",
  messagingSenderId: "161362838612",
  appId: "1:161362838612:web:063a0f892d487ae7f719c1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth =firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};