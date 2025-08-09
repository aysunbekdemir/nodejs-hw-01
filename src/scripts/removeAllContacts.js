const { writeContacts } = require('../constants/contacts');

const removeAllContacts = () => {
  writeContacts([]);
  console.log('All contacts have been removed.');
};

removeAllContacts();
