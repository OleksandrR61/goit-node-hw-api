const express = require('express');

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require('../../controllers/contacts');
const { checkUserData, checkUserId } = require('../../middleware');

const router = express.Router();

router.get('/', listContacts);

router.get('/:contactId', checkUserId, getContactById);

router.post('/', checkUserData, addContact);

router.delete('/:contactId', checkUserId, removeContact);

router.put('/:contactId', checkUserId, checkUserData, updateContact);

router.patch('/:contactId/favorite', checkUserId, checkUserData, updateFavorite);

module.exports = router;