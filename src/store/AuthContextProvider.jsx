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
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const {
    user,
    loading,
    modalMessage,
    error,
    ifVisited,
    ifLogin,
    feature,
    featLoad,
    isro,
    isroLoad,
  } = state;

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

  let today = new Date().toLocaleString("en-ca").slice(0, 10);

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

    const getFeatureData = async () => {
      dispatch({ type: "FEAT-LOAD", payload: true });
      try {
        const snapshot = collection(db, "FEATURES");
        const docsSnap = await getDocs(snapshot);

        const transformedFeatures = [];

        docsSnap.forEach((doc) => {
          transformedFeatures.push(doc.data());
        });

        dispatch({ type: "FEATURE", payload: transformedFeatures });
      } catch (error) {
        dispatch({ type: "ERROR", payload: true });
        dispatch({ type: "MODAL-MESSAGE", payload: error.code });
      }
      dispatch({ type: "FEAT-LOAD", payload: false });
    };

    const getIsroData = async () => {
      dispatch({ type: "ISRO-LOAD", payload: true });
      try {
        const docRef = doc(db, "ISRO-DATA", "ISRO-DATA");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          dispatch({ type: "ISRO", payload: docSnap.data().isroData });
        } else {
          throw new Error("Invalid Request!");
        }
      } catch (error) {
        dispatch({ type: "ERROR", payload: true });
        dispatch({ type: "MODAL-MESSAGE", payload: error.code });
      }
      dispatch({ type: "ISRO-LOAD", payload: false });
    };

    getFeatureData();
    getIsroData();

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
    featLoad,
    isro,
    isroLoad,
    today
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default memo(AuthContextProvider);
