export const startChat = (chatList, recipientPhone, recipientName) => {
  const chatExists = chatList.find(
    (currentChat) => currentChat.phone === recipientPhone
  );
  if (chatExists) return chatList;
  else {
    return [
      ...chatList,
      { name: recipientName, phone: recipientPhone, messages: [] },
    ];
  }
};

export const addSentMessages = (chatList, recipientPhone, messageSent) => {
  return chatList.map((chat) => {
    if (chat.phone === recipientPhone) {
      return {
        ...chat,
        messages: [
          ...chat.messages,
          { text: messageSent, receiver: recipientPhone, sender: "" },
        ],
      };
    } else {
      return chat;
    }
  });
};

export const addReceivedMessages = (chatList, senderPhone, messageReceived) => {
  const copy = [...chatList];
  let flag = 0;
  copy.forEach((chat) => {
    if (chat.phone === senderPhone) {
      chat.messages.push({
        text: messageReceived,
        receiver: "",
        sender: senderPhone,
      });
      flag = 1;
    }
  });
  if (flag === 1) {
    return copy;
  } else {
    return [
      ...chatList,
      {
        phone: senderPhone,
        messages: [
          { text: messageReceived, receiver: "", sender: senderPhone },
        ],
      },
    ];
  }
};
