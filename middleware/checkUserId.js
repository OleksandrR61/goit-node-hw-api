const { ObjectId } = require('mongoose').Types;

const { ResError } = require('../utilites/');

exports.checkUserId = (req, _, next) => {
    if (!ObjectId.isValid(req.params.contactId)) {
        next(new ResError(404, "Not found"));
    };

    next();
};