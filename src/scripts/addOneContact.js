const { readContacts, writeContacts } = require('../constants/contacts');
const createFakeContact = require('../utils/createFakeContact');

const addOneContact = () => {
  const contacts = readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  writeContacts(contacts);
  console.log('A new contact has been added:', newContact);
};

addOneContact();
