const { nanoid } = require('nanoid');

const { catchAsyncError, ResError, sendMail } = require('../../utilites');
const { getUserFromDb, updateUser } = require('../../services');

const reSendVerifyUser = catchAsyncError(async (req, res, next) => {
    let user = await getUserFromDb({ email: req.body.email});

    if (!user) {
        return next(new ResError(404, "User not found"));
    } else if (user.verify) {
        return next(new ResError(400, "Verification has already been passed"));
    }

    user = await updateUser(user._id, { verificationToken: nanoid()})
    
    await sendMail(user.email, user.verificationToken);
    
    res.status(200).json({
        message: "Verification email sent",
    });
});

module.exports = reSendVerifyUser;