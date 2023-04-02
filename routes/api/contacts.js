const express = require('express');

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require('../../controllers');

const {
  checkContactData,
  checkId,
  checkToken
} = require('../../middleware');

const contactsRouter = express.Router();

contactsRouter.get('/', checkToken, listContacts);

contactsRouter.get('/:contactId', checkToken, checkId, getContactById);

contactsRouter.post('/', checkToken, checkContactData, addContact);

contactsRouter.delete('/:contactId', checkToken, checkId, removeContact);

contactsRouter.put('/:contactId', checkToken, checkId, checkContactData, updateContact);

contactsRouter.patch('/:contactId/favorite', checkToken, checkId, checkContactData, updateFavorite);

module.exports = contactsRouter;