import firebase from 'firebase';
require ('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyBe3tzds_fgETee-QtGwM85TvkY0CAp2Q4",
    authDomain: "react-vc-3ea2d.firebaseapp.com",
    databaseURL: "https://react-vc-3ea2d-default-rtdb.firebaseio.com",
    projectId: "react-vc-3ea2d",
    storageBucket: "react-vc-3ea2d.appspot.com",
    messagingSenderId: "868670804245",
    appId: "1:868670804245:web:05b756e369f782ad53591c"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore