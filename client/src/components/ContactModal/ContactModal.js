import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import "./ContactModal.scss";
import { addContact } from "../../redux/ContactList/actions";

Modal.setAppElement("#root");
function ContactModal({ show, onHide }) {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    const payload = {
      phone: phone,
      name: name,
    };
    dispatch(addContact(payload));
    setName("");
    setPhone("");
    onHide();
  };

  return (
    <div className="ContactModal">
      <Modal isOpen={show} onRequestClose={onHide}>
        <h1>Create Contact</h1>
        <input
          type="number"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
        />
        <input
          type="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <button onClick={handleSubmit}>Add</button>
      </Modal>
    </div>
  );
}

export default ContactModal;
