import firebase from './Firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAnIYuNyWVwxNnRpfeC9tHGYCDJru7c3Lw",
  authDomain: "skillsphere-68cae.firebaseapp.com",
  projectId: "skillsphere-68cae",
  storageBucket: "skillsphere-68cae.appspot.com",
  messagingSenderId: "1049305875061",
  appId: "1:1049305875061:web:597e7b65a0f4636e64ee3c",
  measurementId: "G-0ETG56ZE2P"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;