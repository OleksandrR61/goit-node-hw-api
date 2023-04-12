const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
const { User } = require('../../models');

const createUserToDb = body =>  User.create({
    ...body,
    avatarURL: gravatar.url(body.email),
    verificationToken: nanoid(),
});

module.exports = createUserToDb;