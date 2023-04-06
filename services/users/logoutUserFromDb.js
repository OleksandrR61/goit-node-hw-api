const { User } = require('../../models');

const logoutUserFromDb = _id => {
    return User.findByIdAndUpdate(_id, { token: null }, { new: true});
};

module.exports = logoutUserFromDb;