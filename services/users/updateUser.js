const { User } = require('../../models');

const updateUser = (_id, data) => {
    return User.findByIdAndUpdate(_id, { ...data }, { new: true});
};

module.exports = updateUser;