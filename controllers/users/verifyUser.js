const { catchAsyncError, ResError } = require('../../utilites');
const { getUserFromDb, updateUser } = require('../../services');

const verifyUser = catchAsyncError(async (req, res, next) => {
    const user = await getUserFromDb({ verificationToken: req.params.verificationToken});

    if (!user) {
        return next(new ResError(404, "User not found"));
    };

    updateUser(user._id, { verificationToken: "", verify: true}).then((user) => {
        if (user) {
            res.status(200).json({
                message: 'Verification successful',
            });
        } else {
            next(new ResError(404, "User not found or the token is invalid"));
        };        
    })
});

module.exports = verifyUser;