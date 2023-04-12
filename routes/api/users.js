const express = require('express');

const { checkUserData, checkToken, upload } = require('../../middleware');
const {
    addUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    patchSubscription,
    patchAvatar,
    verifyUser,
    reSendVerifyUser,
} = require('../../controllers');

const usersRouter = express.Router();

usersRouter.get('/verify/:verificationToken', verifyUser);

usersRouter.post('/register', checkUserData, addUser);

usersRouter.post('/login', checkUserData, loginUser);

usersRouter.post('/verify', checkUserData, reSendVerifyUser);

usersRouter.post('/logout', checkToken, logoutUser);

usersRouter.post('/current', checkToken, getCurrentUser);

usersRouter.patch('/', checkToken, checkUserData, patchSubscription);

usersRouter.patch('/avatar', checkToken, checkUserData, upload, patchAvatar);

module.exports = usersRouter;