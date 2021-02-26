import chatListTypes from "./types";
import { addMessages, startChat } from "./utils";

const INITIAL_STATE = {
  chatList: [],
  selectedChatIndex: 0,
};

const chatListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatListTypes.START_CHAT:
      return {
        ...state,
        chatList: startChat(state.chatList, action.payload),
      };
    case chatListTypes.SELECT_CHAT:
      return {
        ...state,
        selectedChatIndex: action.payload,
      };
    case chatListTypes.ADD_MESSAGES_TO_CONTACT:
      return {
        ...state,
        chatList: addMessages(
          state.chatList,
          state.selectedChatIndex,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default chatListReducer;
