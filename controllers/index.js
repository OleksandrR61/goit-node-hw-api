const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateFavorite,
} = require('./contacts');
const {
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
} = require('./Users');


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateFavorite,
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
};