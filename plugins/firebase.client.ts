import firebase from "firebase/app";
import "firebase/firestore";

console.log(process);
const env = process.env;

if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: env.APIKEY,
    authDomain: env.AUTHDOMAIN,
    projectId: env.PROJECTID,
    storageBucket: env.STORAGEBUCKET,
    messagingSenderId: env.MESSAGINGSENDERID,
    appId: env.APPID,
    measurementId: env.MEASUREMENTID,
  };
  firebase.initializeApp(firebaseConfig);
}
const firestoreDb = firebase.firestore();

export default firestoreDb;
