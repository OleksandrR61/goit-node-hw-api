const { catchAsyncError } = require('../../utilites');
const { getAllContactsFromDb } = require('../../services');

const listContacts = catchAsyncError(async (req, res, __) => {
  res.status(200).json({
    contacts: await getAllContactsFromDb(req.user, req.query),
  });
});

module.exports = listContacts;