export const addNewContact = (contactList, contactToAdd) => {
  const contactExists = contactList.find(
    (currentContact) => currentContact.phone === contactToAdd.phone
  );

  if (!contactExists) {
    return [...contactList, { ...contactToAdd }];
  } else {
    return contactList;
  }
};
