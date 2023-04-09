const { User } = require('../../models');

const getUserById = id =>  User.findById(id).select('-password');

module.exports = getUserById;