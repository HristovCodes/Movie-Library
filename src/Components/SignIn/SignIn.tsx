import React from "react";
import signInWithPopup, { auth, provider } from "../firebase/firebaseauth";
import { signOut } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import "./SignIn.scss";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { RootState, AppDispatch } from "../../store";

export default function SignIn() {
  const state = useAppSelector<RootState>((state) => state);
  const dispatch: AppDispatch = useAppDispatch();

  const setUser = (authUser: any) => {
    dispatch({ type: "UPDATE_USER", payload: authUser });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
  };
  return !state.authUser.displayName ? (
    <button type="button" onClick={() => handleClick()} className="SignIn">
      Sign In
    </button>
  ) : (
    <p
      onClick={() => signOut(auth).then(() => setUser({}))}
      className="UserName"
    >
      {state.authUser.displayName}
    </p>
  );
}
