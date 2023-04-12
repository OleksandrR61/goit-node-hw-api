const { User } = require('../../models');

const getUserFromDb = (data) => {
    return User.findOne({ ...data }).exec();
};

module.exports = getUserFromDb;