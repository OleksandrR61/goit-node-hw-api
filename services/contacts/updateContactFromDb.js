const { Contact } = require('../../models');

const updateContactFromDb = (owner, _id, body) => {
    return Contact.findOneAndUpdate({ _id, owner }, body, { new: true});
};

module.exports = updateContactFromDb;