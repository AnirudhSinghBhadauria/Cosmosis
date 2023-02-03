import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { auth, provider } from "../../firebase";
import { authReducer, INITIAL_STATE } from "../reducers/authReducer";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { profilePlaceHolderImage } from "../assets/Links";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const { user } = state;

  const setSideBarOpen = (sideBarState) =>
    dispatch({ type: "SIDEBAR", payload: sideBarState });

  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;
    } catch (error) {
      console.log(error.message);
    }
  };

  const signoutWithGoogle = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curruntUser) => {
      dispatch({ type: "USER", payload: curruntUser });

      if (curruntUser) {
        dispatch({ type: "DP", payload: curruntUser.photoURL });
      } else {
        dispatch({ type: "DP", payload: profilePlaceHolderImage });
      }
    });

    return () => unsubscribe();
  }, []);

  user ? console.log(user) : console.log("NO USER");

  const value = {
    ifSideBarOpen: state.ifSideBarOpen,
    changeSideBarState: setSideBarOpen,
    signinWithGoogle,
    signoutWithGoogle,
    user,
    profilePicture: state.profilePicture,
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
