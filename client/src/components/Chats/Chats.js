import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChat } from "../../redux/ChatList/actions";
import "./Chats.scss";

function Chats() {
  const chats = useSelector((state) => state.chatList.chatList);
  const contacts = useSelector((state) => state.contactList.contactList);

  const dispatch = useDispatch();
  const chatIndex = useSelector((state) => state.chatList.selectedChatIndex);

  return (
    <div className="chatList">
      {chats.map((chat, index) => (
        <div
          className={chatIndex === index ? "selectedChat" : "chat"}
          key={index}
          onClick={() => dispatch(selectChat(index))}
        >
          <p>{chat.phone}</p>

          <p>{chat.message[chat.message.length - 1]}</p>
        </div>
      ))}
    </div>
  );
}

export default Chats;
