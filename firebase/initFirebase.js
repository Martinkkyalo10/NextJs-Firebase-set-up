import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import "firebase/analytics";
// import "firebase/performance";

// step 2: get client credentials after creating firebase project

const clientCredentials = {
  // credentials from project settings
  // store then in .env file
  apiKey: process.env.PUBLIC_API_Key,
  authDomain: process.env.AUTH_dOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectid: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// initialize firebase
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    //   check that `window` is in scope for the analyics module!
    if (typeof window !== "undefined") {
      //   enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in clientCredentials) {
        firebase.analytics();
        firebase.performance();
      }
    }
    console.log("Firebase was successfully initialized");
  }
}
