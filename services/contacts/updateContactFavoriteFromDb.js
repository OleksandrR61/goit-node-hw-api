const { Contact } = require('../../models');

const updateContactFavoriteFromDb = (owner, _id, favorite) => {
    return Contact.findOneAndUpdate({ _id, owner }, { favorite }, { new: true});
};

module.exports = updateContactFavoriteFromDb;