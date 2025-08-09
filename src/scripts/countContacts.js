const { readContacts } = require('../constants/contacts');

const countContacts = () => {
  const contacts = readContacts();
  console.log(`Total number of contacts: ${contacts.length}`);
};

countContacts();
