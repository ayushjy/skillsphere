import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCRgEQwdAulk3cJORK27aMXxEduzvIM9bM",
    authDomain: "discord-discussion.firebaseapp.com",
    projectId: "discord-discussion",
    storageBucket: "discord-discussion.appspot.com",
    messagingSenderId: "1080685517856",
    appId: "1:1080685517856:web:2eb468fa3e7ca48065f045",
    measurementId: "G-5C8BRDNHR8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;