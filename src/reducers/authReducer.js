import { profilePlaceHolderImage } from "../assets/Links";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  ifVisited: false,
  ifSideBarOpen: false,
  user: {},
  profilePicture: profilePlaceHolderImage,
  modalMessage: "",
  modalState: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "VISITED":
      return {
        ...state,
        ifVisited: action.payload,
      };
    case "SIDEBAR":
      return {
        ...state,
        ifSideBarOpen: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "DP":
      return {
        ...state,
        profilePicture: action.payload,
      };
    case "MODAL-MESSAGE":
      return {
        ...state,
        modalMessage: action.payload,
      };
    default:
      return state;
  }
};
