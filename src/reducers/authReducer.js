
export const INITIAL_STATE = {
     loading: false,
     error: false,
     ifVisited: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      }
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      }
    case "VISITED":
      return {
        ...state,
        ifVisited: action.payload,
      }
  }
};
