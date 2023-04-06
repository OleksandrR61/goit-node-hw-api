const { catchAsyncError, ResError } = require("../../utilites");
const { removeContactFromDb } = require('../../services');

const removeContact = catchAsyncError(async (req, res, next) => {
  if (await removeContactFromDb(req.user, req.params.contactId)) {
      res.status(200).json({
        message: "contact deleted",
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = removeContact;