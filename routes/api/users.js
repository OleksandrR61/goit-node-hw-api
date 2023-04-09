const express = require('express');

const { checkUserData, checkToken, upload } = require('../../middleware');
const {
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
    patchAvatar,
} = require('../../controllers');

const usersRouter = express.Router();

usersRouter.post('/register', checkUserData, addUser);

usersRouter.post('/login', checkUserData, loginUser);

usersRouter.post('/logout', checkToken, logoutUser);

usersRouter.post('/current', checkToken, getCurrentUser);

usersRouter.patch('/', checkToken, checkUserData, patchSubscription);

usersRouter.patch('/avatar', checkToken, checkUserData, upload, patchAvatar);

module.exports = usersRouter;