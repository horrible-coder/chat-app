import contactListTypes from "./types";

export const addContact = (contactInfo) => {
  return {
    type: contactListTypes.ADD_CONTACT,
    info: "Action to add a contact.",
    payload: contactInfo,
  };
};
