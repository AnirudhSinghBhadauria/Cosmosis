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

  const { user, loading } = state;

  const setSideBarOpen = (sideBarState) =>
    dispatch({ type: "SIDEBAR", payload: sideBarState });

  const signinWithGoogle = async () => {
    dispatch({type: 'LOADING', payload: true});
    try {
      const result = await signInWithPopup(auth, provider);
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;
    } catch (error) {
      console.log(error.message);
    }
    dispatch({type: 'LOADING', payload: false});
  };

  const signoutWithGoogle = async () => {
    dispatch({type: 'LOADING', payload: true});
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
    dispatch({type: 'LOADING', payload: false});
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

  const value = {
    ifSideBarOpen: state.ifSideBarOpen,
    changeSideBarState: setSideBarOpen,
    signinWithGoogle,
    signoutWithGoogle,
    user,
    profilePicture: state.profilePicture,
    loading
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
