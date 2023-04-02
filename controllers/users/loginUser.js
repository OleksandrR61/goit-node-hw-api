const bcrypt = require('bcrypt');

const { catchAsyncError } = require('../../utilites');
const { getUserFromDb, createUserToken } = require('../../services');
const { ResError } = require('../../utilites');

const loginUser = catchAsyncError(async ({body}, res, next) => {
    const user = await getUserFromDb(body.email);

    if (!user || !(await bcrypt.compare(body.password, user.password))) {
        return next(new ResError(401, "Email or password is wrong"));
    };

    const { token, email, subscription } = await createUserToken(user._id);

    res.status(200).json({
        token,
        user: {
            email,
            subscription,
        }
    });
});

module.exports = loginUser;