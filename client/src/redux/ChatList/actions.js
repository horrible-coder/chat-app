import chatListTypes from "./types";

export const startChat = (recipientPhone) => {
  return {
    type: chatListTypes.START_CHAT,
    info: "Action to start a chat",
    payload: recipientPhone,
  };
};

export const selectChat = (index) => {
  return {
    type: chatListTypes.SELECT_CHAT,
    info: "Action to select a chat",
    payload: index,
  };
};

export const addChatMessageToContact = (message) => {
  return {
    type: chatListTypes.ADD_MESSAGES_TO_CONTACT,
    info: "Action to add messages to contact",
    payload: message,
  };
};
