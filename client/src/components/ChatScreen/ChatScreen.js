import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessageToContact } from "../../redux/ChatList/actions";
import "./ChatScreen.scss";
function ChatScreen() {
  const [chatMessage, setChatMessage] = useState("");
  const chats = useSelector((state) => state.chatList.chatList);
  const selectedChatIndex = useSelector(
    (state) => state.chatList.selectedChatIndex
  );
  const dispatch = useDispatch();
  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleSendChatMessage = () => {
    dispatch(addChatMessageToContact(chatMessage));
    setChatMessage("");
  };

  return (
    <div className="chatScreen">
      <div className="chatHeader">
        <h1>{chats[selectedChatIndex].phone}</h1>
      </div>
      <div className="chatsContainer">
        {chats[selectedChatIndex].message.map((message, index) => (
          <p className="chatMessagesRight" key={index}>
            {message}
          </p>
        ))}
      </div>
      <div className="sendMessage">
        <textarea
          className="sendMessageTextArea"
          value={chatMessage}
          onChange={handleChatMessageChange}
          placeholder="Type your message here..."
          rows="2"
        ></textarea>
        <button
          disabled={chatMessage === "" ? true : false}
          className="sendMessageButton"
          onClick={handleSendChatMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
