const addUser = require('./addUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const patchSubscription = require('./patchSubscription');
const patchAvatar = require('./patchAvatar');
const verifyUser = require('./verifyUser');
const reSendVerifyUser = require('./reSendVerifyUser');

module.exports = {
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
    patchAvatar,
    verifyUser,
    reSendVerifyUser,
};