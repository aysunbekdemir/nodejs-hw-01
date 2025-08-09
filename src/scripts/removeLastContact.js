const { readContacts, writeContacts } = require('../constants/contacts');

const removeLastContact = () => {
  const contacts = readContacts();
  if (contacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }
  const removedContact = contacts.pop();
  writeContacts(contacts);
  console.log('Last contact has been removed:', removedContact);
};

removeLastContact();
