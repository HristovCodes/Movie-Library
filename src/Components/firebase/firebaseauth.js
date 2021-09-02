import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { firebase } from "./firebaseapp";

export const auth = getAuth(firebase);
auth.useDeviceLanguage();

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export default signInWithPopup;
