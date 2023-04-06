const { catchAsyncError } = require('../../utilites');
const { logoutUserFromDb } = require('../../services');
const { ResError } = require('../../utilites');

const logoutUser = catchAsyncError(async ({user}, res, next) => {
    if (!(await logoutUserFromDb(user))) {
        return next(new ResError(401, "Not authorized"));
    };

    res.status(204).end();
});

module.exports = logoutUser;