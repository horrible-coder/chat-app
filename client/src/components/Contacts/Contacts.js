import React from "react";
import { useSelector } from "react-redux";
import "./Contacts.scss";
import PersonIcon from "@material-ui/icons/Person";

function Contacts() {
  const contacts = useSelector((state) => state.contactList.contactList);
  return (
    <div className="contactList">
      {contacts.map((contact, index) => (
        <div className="contact" key={index}>
          <PersonIcon />
          <div className="contactInfo">
            <p className="contactName">{contact.name}</p>
            <p className="contactPhone">{contact.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
