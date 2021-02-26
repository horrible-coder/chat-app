import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import "./ConversationModal.scss";
import PersonIcon from "@material-ui/icons/Person";
import { startChat } from "../../redux/ChatList/actions";

function ConversationModal({ show, onHide }) {
  const contacts = useSelector((state) => state.contactList.contactList);
  const dispatch = useDispatch();

  const handleSelectContact = (phone) => {
    dispatch(startChat(phone));
    onHide();
  };

  return (
    <div className="ConversationModal">
      <Modal isOpen={show} onRequestClose={onHide}>
        <h1>Select Contact</h1>
        {contacts.map((contact, index) => (
          <div
            className="contact"
            key={index}
            onClick={() => handleSelectContact(contact.phone)}
          >
            <PersonIcon />
            <div className="contactInfo">
              <p className="contactName">{contact.name}</p>
              <p className="contactPhone">{contact.phone}</p>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default ConversationModal;
