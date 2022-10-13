import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCFpPpE6wUiLdX52gdddVpfWfs0ufyo-Og",
  authDomain: "autofarmstore-d6b08.firebaseapp.com",
  databaseURL:
    "https://autofarmstore-d6b08-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "autofarmstore-d6b08",
  storageBucket: "autofarmstore-d6b08.appspot.com",
  messagingSenderId: "995544131821",
  appId: "1:995544131821:web:e9faa55fc95c08da3984e4",
  measurementId: "G-MZLZKT98LG",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { app, db };
