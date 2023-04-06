const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const createUserToken = _id => {
    return User.findByIdAndUpdate({
        _id,
    }, {
        token: jwt.sign({_id}, process.env.SECRET, { expiresIn: '1h' }),
    }, {
        new: true,
    });
};

module.exports = createUserToken;