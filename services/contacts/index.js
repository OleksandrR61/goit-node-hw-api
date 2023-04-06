const getAllContactsFromDb = require('./getAllContactsFromDb');
const getContactFromDb = require('./getContactFromDb');
const createContactToDb = require('./createContactToDb');
const removeContactFromDb = require('./removeContactFromDb');
const updateContactFromDb = require('./updateContactFromDb');
const updateContactFavoriteFromDb = require('./updateContactFavoriteFromDb');

module.exports = {
    getAllContactsFromDb,
    getContactFromDb,
    createContactToDb,
    removeContactFromDb,
    updateContactFromDb,
    updateContactFavoriteFromDb,
};