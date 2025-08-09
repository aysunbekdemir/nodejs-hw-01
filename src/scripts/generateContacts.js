const { readContacts, writeContacts } = require('../constants/contacts');
const createFakeContact = require('../utils/createFakeContact');

const generateContacts = (count) => {
  const contacts = readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  writeContacts(contacts);
};

const count = parseInt(process.argv[2], 10) || 5; // Default to 5 if no argument is provided
generateContacts(count);
console.log(`${count} new contacts have been added.`);
