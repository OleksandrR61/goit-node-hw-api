const fs = require('fs/promises');
const path = require('path');

const { catchAsyncError } = require('../utilites');
const ResError = require("../utilites/ResError");

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = catchAsyncError(async (_, res, next) => {
  res.status(200).json({
    contacts: JSON.parse(await fs.readFile(contactsPath, "utf8")),
  });
});

const getContactById = catchAsyncError(async (req, res, next) => {
  const contact = JSON.parse(await fs.readFile(contactsPath, "utf8")).find(contact =>
      contact.id === req.params.contactId.toString()
  );

  if (contact) {
      res.status(200).json({
        contact,
      });
  } else {
    next(new ResError(404, "Not found"));
  };
});

const addContact = catchAsyncError(async (req, res, next) => {
  const { name, email, phone } = req.body;

  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8"));
  
  contacts.push({
      id: (Number(contacts[contacts.length - 1].id) + 1).toString(),
      name,
      email,
      phone
  });

  await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");

  res.status(201).json({
    contact: contacts[contacts.length - 1],
  });
});

const removeContact = catchAsyncError(async (req, res, next) => {
  let isFound = false;

  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8")).filter(contact => {
    if (contact.id === req.params.contactId.toString()) {
      isFound = true;
      return false;
    };
      
    return true;
  });

  if (isFound) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
    res.status(200).json({
      message: "contact deleted"
    });
  } else {
    next(new ResError(404, "Not found"));
  };
});

const updateContact = catchAsyncError(async (req, res, next) => {
  let foundIndex = null;

  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8")).map((contact, index) => {
    if (contact.id === req.params.contactId.toString()) {
      foundIndex = index;
      return {...contact, ...req.body};
    };
      
    return contact;
  });

  if (foundIndex) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
    res.status(200).json({
      contact: contacts[foundIndex]
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
}
