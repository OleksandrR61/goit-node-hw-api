const Joi = require('joi');

const ResError = require('../utilites/ResError');

const checkNewUser = (data) => Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().alphanum().min(1).max(30).required().messages({
        'any.required': "missing required name field"
    }),
    email: Joi.string().email().min(3).max(30).required().messages({
        'any.required': "missing required email field"
    }),
    phone: Joi.string().pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){2,14}(\s*)?$/).required().messages({
        'any.required': "missing required phone field",
        'string.pattern.base': "phone must be a valid phone number"
    }),
}).messages({'object.missing': "missing fields"}).validate(data);

const checkUpdateUser = (data) => Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().alphanum().min(1).max(30),
    email: Joi.string().email().min(3).max(30),
    phone: Joi.string().pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){2,14}(\s*)?$/).messages({
        'string.pattern.base': "phone must be a valid phone number"
    }),
}).or('name', 'email', 'phone').messages({'object.missing': "missing fields"}).validate(data);

exports.checkUserData = (req, _, next) => {
    let validateSchema;

    switch (req.method) {
        case "POST": validateSchema = checkNewUser;
            break;
        case "PUT": validateSchema = checkUpdateUser;
            break;
        default: break;
    };

    const { error } = validateSchema(req.body);
    
    if (error) {
        console.log(error);
        return next(new ResError(400, error.details.map(error => error.message).join(', ')));
    };

    next();
}