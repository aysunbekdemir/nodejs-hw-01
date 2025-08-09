const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');
const PATH_DB = './src/db/db.json';

const updateContacts = (newContacts) => {
  fs.writeFileSync(contactsPath, JSON.stringify(newContacts, null, 2));
};

const listContacts = () => {
  const data = fs.readFileSync(contactsPath);
  return JSON.parse(data);
};

const readContacts = () => {
  const data = fs.readFileSync(PATH_DB, 'utf-8');
  return JSON.parse(data);
};

const writeContacts = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

module.exports = {
  updateContacts,
  listContacts,
  readContacts,
  writeContacts,
};