const express = require('express');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact
} = require('../../controllers/contacts');
const { checkUserData } = require('../../middleware')

const router = express.Router()

router.get('/', listContacts);

router.get('/:contactId', getContactById);

router.post('/', checkUserData, addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', checkUserData, updateContact);

module.exports = router
