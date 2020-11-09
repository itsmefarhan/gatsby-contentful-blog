import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAXkHV0ewnzuQeFVi4tiwqtbqG5N0oRzj4",
  authDomain: "reactnativefirebase-79776.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-79776.firebaseio.com",
  projectId: "reactnativefirebase-79776",
  storageBucket: "reactnativefirebase-79776.appspot.com",
  messagingSenderId: "328515719263",
  appId: "1:328515719263:web:cdf3ab865fb8b449270bea"
}

firebase.initializeApp(firebaseConfig)
export default firebase
