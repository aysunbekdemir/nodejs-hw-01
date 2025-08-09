const { readContacts } = require('../constants/contacts');

const getAllContacts = () => {
  const contacts = readContacts();
  console.log('All contacts:', contacts);
};

getAllContacts();
