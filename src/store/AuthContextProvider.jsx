import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer, INITIAL_STATE } from "../reducers/authReducer";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(INITIAL_STATE, authReducer);
  const { ifVisited } = state;

  


  const value = { ifVisited };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
