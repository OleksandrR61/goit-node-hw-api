const { catchAsyncError, ResError } = require("../../utilites");
const { updateContactFromDb } = require('../../services');

const updateContact = catchAsyncError(async ({ params: {contactId}, body, user }, res, next) => {
  const contact = await updateContactFromDb(user, contactId, body);

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = updateContact;