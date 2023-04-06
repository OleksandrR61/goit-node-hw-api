const { catchAsyncError, ResError } = require('../../utilites');
const { getUserById } = require('../../services');

const getCurrentUser = catchAsyncError(async ({ user }, res, next) => {
  const currentUser = await getUserById(user);
  
  if (currentUser) {
    res.status(200).json({
        email: currentUser.email,
        subscription: currentUser.subscription
    });
  } else {
    next(new ResError(401, "Not authorized"));
  };
});

module.exports = getCurrentUser;