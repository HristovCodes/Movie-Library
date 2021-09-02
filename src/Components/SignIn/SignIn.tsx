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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

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
