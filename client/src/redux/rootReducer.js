import { combineReducers } from "redux";
import chatListReducer from "./ChatList/reducer";
import contactListReducer from "./ContactList/reducer";
import profileReducer from "./Profile/reducer";

const rootReducer = combineReducers({
  contactList: contactListReducer,
  chatList: chatListReducer,
  profile: profileReducer,
});

export default rootReducer;
