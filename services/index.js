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
    updateUserSubscriptionFromDb,
    updateUserAvatarFromDb,
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
    updateUserSubscriptionFromDb,
    updateUserAvatarFromDb,
};