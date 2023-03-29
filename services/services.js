const { Contact } = require('../models');

const getAllContactsFromDb = () => {
    return Contact.find();
};

const getContactFromDb = id => {
    return Contact.findById(id);
};

const createContactToDb = body => {
    return Contact.create({ ...body });
};

const removeContactFromDb = id => {
    return Contact.findOneAndRemove({ _id: id });
};

const updateContactFromDb = (id, body) => {
    return Contact.findByIdAndUpdate({ _id: id }, body, { new: true});
};

const updateContactFavoriteFromDb = (id, favorite) => {
    return Contact.findByIdAndUpdate({ _id: id }, { favorite }, { new: true});
};

module.exports = {
    getAllContactsFromDb,
    getContactFromDb,
    createContactToDb,
    removeContactFromDb,
    updateContactFromDb,
    updateContactFavoriteFromDb,
};