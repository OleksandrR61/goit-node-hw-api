const { catchAsyncError, ResError } = require("../../utilites");
const { updateUser } = require('../../services');

const patchSubscription = catchAsyncError(async ({ body: { subscription }, user }, res, next) => {
  const contact = await updateUser(user, { subscription });

  if (contact) {
      res.status(200).json({
        email: contact.email,
        subscription: contact.subscription,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = patchSubscription;