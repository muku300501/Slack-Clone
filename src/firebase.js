import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYaLsFOdljghXwTN_UPlxPwnxhuWaiuV4",
  authDomain: "slack-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://slack-by-mukund-chamariya.firebaseio.com",
  projectId: "slack-by-mukund-chamariya",
  storageBucket: "slack-by-mukund-chamariya.appspot.com",
  messagingSenderId: "959775333451",
  appId: "1:959775333451:web:79d6812dd724a4b3a101ce",
  measurementId: "G-803LC85SP5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
