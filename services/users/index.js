const createUserToDb = require('./createUserToDB');
const getUserFromDb = require('./getUserFromDb');
const createUserToken = require('./createUserToken');
const getUserById = require('./getUserById');
const logoutUserFromDb = require('./logoutUserFromDb');
const updateUser = require('./updateUser');

module.exports = {
    createUserToDb,
    getUserFromDb,
    createUserToken,
    getUserById,
    logoutUserFromDb,
    updateUser,
};