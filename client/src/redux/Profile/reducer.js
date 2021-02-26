import profileTypes from "./types";

const INITIAL_STATE = {
  phone: "",
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profileTypes.SEND_PHONE_NUMBER:
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
