import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-brp1MEbLnIGkJkOVftsALZ8pgM8Q6YE",
    authDomain: "primevideo-clone.firebaseapp.com",
    projectId: "primevideo-clone",
    storageBucket: "primevideo-clone.appspot.com",
    messagingSenderId: "179282968497",
    appId: "1:179282968497:web:c891b1923503f9dcaec790",
    measurementId: "G-338M3LEMZ4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { auth };
  export default db;