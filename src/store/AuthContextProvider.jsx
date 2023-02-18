import React, { memo, useEffect, useReducer } from "react";
import { createContext } from "react";
import { auth, provider, db } from "../../firebase";
import { authReducer, INITIAL_STATE } from "../reducers/authReducer";
import { profilePlaceHolderImage } from "../assets/Links";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const { user, loading, modalMessage, error, ifVisited, ifLogin, feature } = state;

  const setSideBarOpen = (sideBarState) =>
    dispatch({ type: "SIDEBAR", payload: sideBarState });

  const signinWithGoogle = async () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: false });
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      dispatch({ type: "IFLOGIN", payload: true });
    } catch (error) {
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

      if (localStorage.getItem("ifVisited") !== "true") {
        dispatch({ type: "IFVISITED", payload: false });
        localStorage.setItem("ifVisited", "true");
      } else {
        dispatch({ type: "IFVISITED", payload: true });
      }
    });

    const getData = async () => {
      const snapshot = collection(db, "FEATURES");
      const docsSnap = await getDocs(snapshot);

      const transformedFeatures = [];

      docsSnap.forEach((doc) => {
        transformedFeatures.push(doc.data());
      });

      dispatch({ type: "FEATURE", payload: transformedFeatures });
    };

    getData();

    return () => unsubscribe();
  }, []);

  const modalHandeler = () => {
    dispatch({ type: "ERROR", payload: false });
  };

  const ifVisitedHandeler = () => {
    dispatch({ type: "IFVISITED", payload: true });
  };

  const loginHandeler = () => dispatch({ type: "IFLOGIN", payload: false });

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
    ifVisited,
    ifVisitedHandeler,
    ifLogin,
    loginHandeler,
    feature,
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default memo(AuthContextProvider);
