const jwt = require('jsonwebtoken');

const { ResError, catchAsyncError } = require('../utilites');
const { getUserById } = require('../services');

const checkToken = catchAsyncError(async (req, res, next) => {
    const token = req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1];
    let userId = null;

    jwt.verify(token, process.env.SECRET, (err, data) => {
        if (err) {
            return next(new ResError(401, "Not authorized"));
        };

        userId = data._id;
    });

    const user = await getUserById(userId);

    if (user?.token !== token) {
        return next(new ResError(401, "Not authorized"));
    };

    req.user = user._id;

    next();
});

module.exports = checkToken;