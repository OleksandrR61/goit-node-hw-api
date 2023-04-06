const { Contact } = require('../../models');

const createContactToDb = body => {
    return Contact.create({ ...body });
};

module.exports = createContactToDb;