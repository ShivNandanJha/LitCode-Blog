 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey           : process.env.FIREBASE,
  authDomain       : "brocodeblog-70ccb.firebaseapp.com",
  projectId        : "brocodeblog-70ccb",
  storageBucket    : "brocodeblog-70ccb.appspot.com",
  messagingSenderId: "204417686615",
  appId            : "1:204417686615:web:14ccee3832fdbec8b7d712"
};

// Initialize Firebase
export const  app           = initializeApp(firebaseConfig);
// export const storage = getStorage(firebaseApp);
