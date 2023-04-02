const { Contact } = require('../../models');

const getContactFromDb = (owner, _id) => {
    return Contact.findOne({_id, owner});
};

module.exports = getContactFromDb;