import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSkUloG3mrI1N7u7kigg1TWyh47NbKZnI",
    authDomain: "olx-clone-54e41.firebaseapp.com",
    projectId: "olx-clone-54e41",
    storageBucket: "olx-clone-54e41.appspot.com",
    messagingSenderId: "870388966156",
    appId: "1:870388966156:web:a3c82cb18dc12ef1645f29",
    measurementId: "G-2S5C4MG6DC"
  };
export default firebase.initializeApp(firebaseConfig)