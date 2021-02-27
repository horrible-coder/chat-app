import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChat } from "../../redux/ChatList/actions";
import "./Chats.scss";

function Chats() {
  const chats = useSelector((state) => state.chatList.chatList);

  const dispatch = useDispatch();
  const chatIndex = useSelector((state) => state.chatList.selectedChatIndex);

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  return (
    <div className="chatList">
      {chats.map((chat, index) => (
        <div
          className={chatIndex === index ? "selectedChat" : "chat"}
          key={index}
          onClick={() => dispatch(selectChat(index))}
        >
          <p>{chat.phone}</p>

          <p>
            {chat.messages.length > 0 &&
              (chat.messages[chat.messages.length - 1].receiver !== ""
                ? "You: " + chat.messages[chat.messages.length - 1].text
                : chat.messages[chat.messages.length - 1].text)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chats;
