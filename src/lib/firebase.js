import Firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBp-Ylq8l2sMmnE-Gslc6kHe7oiODNVJBM",
    authDomain: "netflix-clone-ae0db.firebaseapp.com",
    projectId: "netflix-clone-ae0db",
    storageBucket: "netflix-clone-ae0db.appspot.com",
    messagingSenderId: "962773260891",
    appId: "1:962773260891:web:84c5211bf4246a92817d7e"
}

const firebase = Firebase.initializeApp(config);
export { firebase };