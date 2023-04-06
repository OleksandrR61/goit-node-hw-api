const { Contact } = require('../../models');

const getAllContactsFromDb = (owner, { page = 1, limit = 20, favorite = false }) => {
    return Contact.find(favorite
            ? { owner, favorite }
            : { owner })
        .skip((page - 1) * limit)
        .limit(limit);
};

module.exports = getAllContactsFromDb;