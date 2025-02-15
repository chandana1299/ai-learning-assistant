import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBawg_qcByeRfhOhpRHCOQmjrNwwcX8QJk",
    authDomain: "ai-personalized-learning-867d0.firebaseapp.com",
    projectId: "ai-personalized-learning-867d0",
    storageBucket: "ai-personalized-learning-867d0.firebasestorage.app",
    messagingSenderId: "671404256403",
    appId: "1:671404256403:web:0b0c9af95450a99c393166",
    measurementId: "G-LG9W7X1HN0"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => signOut(auth);
export { auth };
