const { catchAsyncError } = require('../../utilites');
const { createContactToDb } = require('../../services');

const addContact = catchAsyncError(async (req, res, _) => {
  res.status(201).json({
    contact: await createContactToDb({...req.body, owner: req.user}),
  });
});

module.exports = addContact;