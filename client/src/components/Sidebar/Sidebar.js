import React, { useEffect, useState, useRef } from "react";
import Contacts from "../Contacts/Contacts";
import ContactModal from "../ContactModal/ContactModal";
import ConversationModal from "../ConversationModal/ConversationModal";
import "./Sidebar.scss";
import Chats from "../Chats/Chats";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import { setSocket } from "../../redux/Socket/actions";

function Sidebar() {
  const [chatOpen, setChatOpen] = useState(true);
  const [conversationModalOpen, setConversationModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const phone = useSelector((state) => state.profile.phone);

  const socketRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = socketIOClient("http://localhost:5000", {
      query: {
        phone: phone,
      },
    });
    dispatch(setSocket(socketRef));
  }, [dispatch, phone]);

  return (
    <>
      <div className="sidebar">
        <div className="myProfile">
          <p className="profilePhone">{phone}</p>
        </div>
        <div className="sidebarTabs">
          <div
            className={chatOpen ? "chatsTabActive" : "chatsTab"}
            onClick={() => setChatOpen(true)}
          >
            <h1 className="sidebarTabsHeading">Chats</h1>
          </div>
          <div
            className={chatOpen ? "contactsTab" : "contactsTabActive"}
            onClick={() => setChatOpen(false)}
          >
            <h1 className="sidebarTabsHeading">Contacts</h1>
          </div>
        </div>

        {chatOpen ? (
          <>
            <Chats />
            <button onClick={() => setConversationModalOpen(true)}>
              Start Conversation
            </button>
          </>
        ) : (
          <>
            <Contacts />
            <button onClick={() => setContactModalOpen(true)}>
              Add Contact
            </button>
          </>
        )}
      </div>

      <ConversationModal
        show={conversationModalOpen}
        onHide={() => setConversationModalOpen(false)}
      />

      <ContactModal
        show={contactModalOpen}
        onHide={() => setContactModalOpen(false)}
      />
    </>
  );
}

export default Sidebar;
