const express = require('express');

const { checkUserData, checkToken } = require('../../middleware');
const {
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
} = require('../../controllers');

const usersRouter = express.Router();

usersRouter.post('/register', checkUserData, addUser);

usersRouter.post('/login', checkUserData, loginUser);

usersRouter.post('/logout', checkToken, logoutUser);

usersRouter.post('/current', checkToken, getCurrentUser);

usersRouter.patch('/', checkToken, checkUserData, patchSubscription);

module.exports = usersRouter;