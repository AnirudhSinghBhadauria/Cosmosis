import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { auth, provider } from "../../firebase";
import { authReducer, INITIAL_STATE } from "../reducers/authReducer";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { profilePlaceHolderImage } from "../assets/Links";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const { user, loading, modalMessage, error } = state;

  const setSideBarOpen = (sideBarState) =>
    dispatch({ type: "SIDEBAR", payload: sideBarState });

  const signinWithGoogle = async () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: false });
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token)
    } catch (error) {
      console.log(error.code);
      dispatch({ type: "ERROR", payload: true });
      dispatch({ type: "MODAL-MESSAGE", payload: error.code });
    }
    dispatch({ type: "LOADING", payload: false });
  };

  const signoutWithGoogle = async () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: false });

    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.code);
      dispatch({ type: "ERROR", payload: true });
      dispatch({ type: "MODAL-MESSAGE", payload: error.code });
    }
    dispatch({ type: "LOADING", payload: false });
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

  const modalHandeler = () => {
    dispatch({ type: "ERROR", payload: false });
  };

  const value = {
    ifSideBarOpen: state.ifSideBarOpen,
    changeSideBarState: setSideBarOpen,
    signinWithGoogle,
    signoutWithGoogle,
    user,
    profilePicture: state.profilePicture,
    loading,
    modalMessage,
    error,
    modalHandeler,
  };

  user ? console.log(user.email) : console.log("NO USER");

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
