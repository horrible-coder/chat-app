import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSentChatMessage,
  addReceivedChatMessage,
} from "../../redux/ChatList/actions";
import "./ChatScreen.scss";
function ChatScreen() {
  const [chatMessage, setChatMessage] = useState("");
  const chats = useSelector((state) => state.chatList.chatList);
  const selectedChatIndex = useSelector(
    (state) => state.chatList.selectedChatIndex
  );
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);
  const phone = useSelector((state) => state.profile.phone);

  useEffect(() => {
    socket.current.on("receiveChatMessage", (data) => {
      dispatch(addReceivedChatMessage(data.sender, data.message));
    });
  }, [socket, dispatch]);

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleSendChatMessage = () => {
    dispatch(addSentChatMessage(chats[selectedChatIndex].phone, chatMessage));
    socket.current.emit("newChatMessage", {
      message: chatMessage,
      sender: phone,
      receiver: chats[selectedChatIndex].phone,
    });
    setChatMessage("");
  };

  return (
    <div className="chatScreen">
      <div className="chatHeader">
        <h1>{chats[selectedChatIndex].phone}</h1>
      </div>
      <div className="chatsContainer">
        {chats[selectedChatIndex].messages.map((message, index) => (
          <p
            className={
              message.receiver === "" ? "chatMessagesLeft" : "chatMessagesRight"
            }
            key={index}
          >
            {message.text}
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
