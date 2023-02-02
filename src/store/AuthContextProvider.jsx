import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer, INITIAL_STATE } from "../reducers/authReducer";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const setSideBarOpen = (sideBarState) =>
    dispatch({ type: "SIDEBAR", payload: sideBarState });


  const value = {
    ifSideBarOpen: state.ifSideBarOpen,
    changeSideBarState: setSideBarOpen
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
