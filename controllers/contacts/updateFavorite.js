const { catchAsyncError, ResError } = require("../../utilites");
const { updateContactFavoriteFromDb } = require('../../services');

const updateFavorite = catchAsyncError(async ({ params: {contactId}, body: { favorite }, user }, res, next) => {
  const contact = await updateContactFavoriteFromDb(user, contactId, favorite);

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = updateFavorite;