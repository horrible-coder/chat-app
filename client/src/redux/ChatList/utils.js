import { useSelector } from "react-redux";
export const startChat = (chatList, recipientPhone) => {
  const chatExists = chatList.find(
    (currentChat) => currentChat.phone === recipientPhone
  );
  if (chatExists) return chatList;
  else {
    return [...chatList, { phone: recipientPhone, message: [] }];
  }
};

export const addMessages = (chatList, selectedIndex, messageToAdd) => {
  const chats = [...chatList];
  chats[selectedIndex].message.push(messageToAdd);
  return chats;
};
