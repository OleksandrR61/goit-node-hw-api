const { catchAsyncError } = require('../utilites');
const { ResError } = require("../utilites/");
const {
  getAllContactsFromDb,
  getContactFromDb,
  createContactToDb,
  removeContactFromDb,
  updateContactFromDb,
  updateContactFavoriteFromDb
} = require('../services');

const listContacts = catchAsyncError(async (_, res, __) => {
  res.status(200).json({
    contacts: await getAllContactsFromDb(),
  });
});

const getContactById = catchAsyncError(async (req, res, next) => {
  const contact = await getContactFromDb(req.params.contactId);

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

const addContact = catchAsyncError(async (req, res, _) => {
  res.status(201).json({
    contact: await createContactToDb(req.body),
  });
});

const removeContact = catchAsyncError(async (req, res, next) => {
  if (await removeContactFromDb(req.params.contactId)) {
      res.status(200).json({
        message: "contact deleted",
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

const updateContact = catchAsyncError(async ({ params: {contactId}, body }, res, next) => {
  const contact = await updateContactFromDb(contactId, body);

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

const updateFavorite = catchAsyncError(async ({ params: {contactId}, body: { favorite } }, res, next) => {
  const contact = await updateContactFavoriteFromDb(contactId, favorite);

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
};