import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDRuFBayCXCZbxabvx8Mgews4jgI9jRFQ4",
    authDomain: "my-portfolio-57a4c.firebaseapp.com",
    projectId: "my-portfolio-57a4c",
    storageBucket: "my-portfolio-57a4c.appspot.com",
    messagingSenderId: "648474282016",
    appId: "1:648474282016:web:1575aea9858dc0f953d445"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const storage = getStorage()
  

  export {app , db,storage};