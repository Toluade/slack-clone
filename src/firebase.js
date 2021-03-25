import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8MjO3nkEEOsuSWAbKPopHGjonuF40ioo",
  authDomain: "slack-clone-toluade.firebaseapp.com",
  projectId: "slack-clone-toluade",
  storageBucket: "slack-clone-toluade.appspot.com",
  messagingSenderId: "129358500785",
  appId: "1:129358500785:web:83d3d1c675479f3703e390",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
