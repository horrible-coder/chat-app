import socketTypes from "./types";

const INITIAL_STATE = {
  socket: null,
};

const socketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case socketTypes.SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default socketReducer;
