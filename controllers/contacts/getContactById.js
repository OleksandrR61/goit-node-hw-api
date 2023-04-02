const { catchAsyncError, ResError } = require('../../utilites');
const { getContactFromDb } = require('../../services');

const getContactById = catchAsyncError(async (req, res, next) => {
  const contact = await getContactFromDb(req.user, req.params.contactId);
  
  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = getContactById;