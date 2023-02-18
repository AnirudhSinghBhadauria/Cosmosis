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
      case 'IFLOGIN':
        return{
          ...state,
          ifLogin: action.payload
        };
      case 'FEATURE':
        return{
          ...state,
          feature: action.payload
        };
    default:
      return state;
  }
};
