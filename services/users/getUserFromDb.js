const { User } = require('../../models');

const getUserFromDb = email => {
    return User.findOne({ email }).exec();
};

module.exports = getUserFromDb;