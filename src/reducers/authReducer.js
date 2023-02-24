import { profilePlaceHolderImage } from "../assets/Links";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  ifSideBarOpen: false,
  user: {},
  profilePicture: profilePlaceHolderImage,
  modalMessage: "",
  modalState: false,
  ifVisited: true,
  ifLogin: false,
  feature: [],
  featLoad: false,
  isro: [],
  isroLoad: false,
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
    case "IFVISITED":
      return {
        ...state,
        ifVisited: action.payload,
      };
    case "IFLOGIN":
      return {
        ...state,
        ifLogin: action.payload,
      };
    case "FEATURE":
      return {
        ...state,
        feature: action.payload,
      };
    case "FEAT-LOAD":
      return {
        ...state,
        featLoad: action.payload,
      };
      case "ISRO":
        return {
          ...state,
          isro: action.payload,
        };
        case "ISRO-LOAD":
          return {
            ...state,
            isroLoad: action.payload,
          };
    default:
      return state;
  }
};
