const { Contact } = require('../../models');

const removeContactFromDb = (owner, _id) => {
    return Contact.findOneAndRemove({ _id, owner });
};

module.exports = removeContactFromDb;