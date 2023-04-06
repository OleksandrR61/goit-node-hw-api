const { User } = require('../../models');

const createUserToDb = body =>  User.create({ ...body });

module.exports = createUserToDb;