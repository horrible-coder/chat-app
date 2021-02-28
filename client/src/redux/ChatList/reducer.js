import chatListTypes from "./types";
import { addSentMessages, addReceivedMessages, startChat } from "./utils";

const INITIAL_STATE = {
  chatList: [],
  selectedChatIndex: 0,
};

const chatListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatListTypes.START_CHAT:
      return {
        ...state,
        chatList: startChat(state.chatList, action.phone, action.name),
      };
    case chatListTypes.SELECT_CHAT:
      return {
        ...state,
        selectedChatIndex: action.payload,
      };
    case chatListTypes.ADD_SENT_MESSAGES_TO_CONTACT:
      return {
        ...state,
        chatList: addSentMessages(state.chatList, action.phone, action.message),
      };
    case chatListTypes.ADD_RECEIVED_MESSAGES_TO_CONTACT:
      return {
        ...state,
        chatList: addReceivedMessages(
          state.chatList,
          action.phone,
          action.message
        ),
      };
    default:
      return state;
  }
};

export default chatListReducer;
