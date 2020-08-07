import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCChIUi54YZ_h-NKtTtelBP7VI6In5FfnE",
  authDomain: "todo-app-cp-e2709.firebaseapp.com",
  databaseURL: "https://todo-app-cp-e2709.firebaseio.com",
  projectId: "todo-app-cp-e2709",
  storageBucket: "todo-app-cp-e2709.appspot.com",
  messagingSenderId: "591701412629",
  appId: "1:591701412629:web:44d85d14f1c9ad0e88371c",
  measurementId: "G-HS6GJ4R2FK",
});

const db = firebaseApp.firestore();

export default db;
