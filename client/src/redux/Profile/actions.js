import profileTypes from "./types";

export const sendPhoneNumber = (phone) => {
  return {
    type: profileTypes.SEND_PHONE_NUMBER,
    info: "Action to send your phone number",
    payload: phone,
  };
};
