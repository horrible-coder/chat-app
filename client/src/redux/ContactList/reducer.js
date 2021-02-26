import contactListTypes from "./types";
import { addNewContact } from "./utils";

const INITIAL_STATE = {
  contactList: [],
};

const contactListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case contactListTypes.ADD_CONTACT:
      return {
        ...state,
        contactList: addNewContact(state.contactList, action.payload),
      };
    default:
      return state;
  }
};

export default contactListReducer;
