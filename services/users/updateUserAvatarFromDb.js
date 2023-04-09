const { User } = require('../../models');

const updateUserAvatarFromDb = (_id, avatarURL) => {
    return User.findByIdAndUpdate(_id, { avatarURL }, { new: true});
};

module.exports = updateUserAvatarFromDb;