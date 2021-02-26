import React from "react";
import { useSelector } from "react-redux";
import ChatScreen from "../ChatScreen/ChatScreen";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.scss";

function Dashboard() {
  const chats = useSelector((state) => state.chatList.chatList);
  return (
    <div className="dashboard">
      <Sidebar />
      {chats.length > 0 && <ChatScreen />}
    </div>
  );
}

export default Dashboard;
