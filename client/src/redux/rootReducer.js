import { combineReducers } from "redux";
import chatListReducer from "./ChatList/reducer";
import contactListReducer from "./ContactList/reducer";
import profileReducer from "./Profile/reducer";
import socketReducer from "./Socket/reducer";

const rootReducer = combineReducers({
  contactList: contactListReducer,
  chatList: chatListReducer,
  profile: profileReducer,
  socket: socketReducer,
});

export default rootReducer;
