const { ObjectId } = require('mongoose').Types;

const { ResError } = require('../utilites');

const checkId = (req, _, next) => {
    if (!ObjectId.isValid(req.params.contactId)) {
        next(new ResError(404, "Not found"));
    };

    next();
};

module.exports = checkId;