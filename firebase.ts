import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgm1731p4yVI4p2JBlU_k9hTQSl0JiSU4",
    authDomain: "patientli-2042a.firebaseapp.com",
    projectId: "patientli-2042a",
    storageBucket: "patientli-2042a.firebasestorage.app",
    messagingSenderId: "909040807532",
    appId: "1:909040807532:web:9462191cebb4a43e73f249",
    measurementId: "G-C3XBPC7TKE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
