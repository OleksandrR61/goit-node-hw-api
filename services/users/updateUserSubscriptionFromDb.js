const { User } = require('../../models');

const updateUserSubscriptionFromDb = (_id, subscription) => {
    return User.findByIdAndUpdate(_id, { subscription }, { new: true});
};

module.exports = updateUserSubscriptionFromDb;