const { User } = require('../../models');

const getUserById = id =>  User.findById(id);

module.exports = getUserById;