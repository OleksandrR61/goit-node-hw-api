const { catchAsyncError, ResError } = require("../../utilites");
const { updateUserSubscriptionFromDb } = require('../../services');

const updateFavorite = catchAsyncError(async ({ body: { subscription }, user }, res, next) => {
  const contact = await updateUserSubscriptionFromDb(user, subscription);

  if (contact) {
      res.status(200).json({
        email: contact.email,
        subscription: contact.subscription,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = updateFavorite;