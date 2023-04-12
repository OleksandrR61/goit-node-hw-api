const {
    getAllContactsFromDb,
    getContactFromDb,
    createContactToDb,
    removeContactFromDb,
    updateContactFromDb,
    updateContactFavoriteFromDb,
} = require('./contacts');
const {
    createUserToDb,
    getUserFromDb,
    createUserToken,
    getUserById,
    logoutUserFromDb,
    updateUser,
} = require('./users');

module.exports = {
    getAllContactsFromDb,
    getContactFromDb,
    createContactToDb,
    removeContactFromDb,
    updateContactFromDb,
    updateContactFavoriteFromDb,
    createUserToDb,
    getUserFromDb,
    createUserToken,
    getUserById,
    logoutUserFromDb,
    updateUser,
};