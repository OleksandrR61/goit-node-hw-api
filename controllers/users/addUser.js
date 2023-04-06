const { catchAsyncError } = require('../../utilites');
const { createUserToDb } = require('../../services');
const { saltPassword, ResError } = require('../../utilites');

const addUser = catchAsyncError(async (req, res, next) => {
    try {
        const { email, subscription} = await createUserToDb({
            ...req.body,
            password: await saltPassword(req.body.password),
        });

        res.status(201).json({
            email,
            subscription,
        });
    } catch (err) {
        if (err.keyPattern.email === 1) {
            next(new ResError(409, "Email in use"))
        };
    };
});

module.exports = addUser;