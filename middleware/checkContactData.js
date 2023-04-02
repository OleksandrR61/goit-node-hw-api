const Joi = require('joi');

const { ResError } = require('../utilites');

const checkNewContact = (data) => Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().pattern(/^([A-Za-z0-9- ]?){1,30}(\s*)?$/).required().messages({
        'any.required': "missing required name field",
        'string.pattern.base': "name must be a valid"
    }),
    email: Joi.string().email().min(3).max(30).required().messages({
        'any.required': "missing required email field"
    }),
    phone: Joi.string().pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){2,14}(\s*)?$/).required().messages({
        'any.required': "missing required phone field",
        'string.pattern.base': "phone must be a valid phone number"
    }),
    favorite: Joi.boolean(),
}).messages({'object.missing': "missing fields"}).validate(data);

const checkUpdateContact = (data) => Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().pattern(/^([A-Za-z0-9- ]?){1,30}(\s*)?$/).messages({
        'string.pattern.base': "name must be a valid"
    }),
    email: Joi.string().email().min(3).max(30),
    phone: Joi.string().pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){2,14}(\s*)?$/).messages({
        'string.pattern.base': "phone must be a valid phone number"
    }),
    favorite: Joi.boolean(),
}).or('name', 'email', 'phone', 'favorite').messages({'object.missing': "missing fields"}).validate(data);

const checkUpdateFavorite = (data) => Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.boolean().required().messages({
        'any.required': "missing field favorite"
    }),
}).validate(data);

const checkContactData = (req, res, next) => {
    let validateSchema;

    switch (req.method) {
        case "POST": validateSchema = checkNewContact;
            break;
        case "PUT": validateSchema = checkUpdateContact;
            break;
        case "PATCH": if(req.url === `/${req.params.contactId}/favorite`) {
                validateSchema = checkUpdateFavorite;
            };
            break;
        default: next(new ResError(404, "Not Found"));
    };

    const { error, value } = validateSchema(req.body);
    
    if (error) {
        return next(new ResError(400, error.details.map(error => error.message).join(', ')));
    };

    res.body = {
        ...value,
    };

    next();
};

module.exports = checkContactData;