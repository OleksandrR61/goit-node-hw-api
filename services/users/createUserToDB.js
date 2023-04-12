const gravatar = require('gravatar');
const { User } = require('../../models');

const createUserToDb = body =>  User.create({
    ...body,
    avatarURL: gravatar.url(body.email),
});

module.exports = createUserToDb;