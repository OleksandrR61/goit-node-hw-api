const Joi = require('joi');

const { ResError } = require('../utilites');

const SUBSCRIBES = ['starter', 'pro', 'business'];

const checkNewUser = data => {
    data = {
        email: data.email,
        password: data.password
    };
    
    return Joi.object().options({ abortEarly: false }).keys({
        email: Joi.string().email().min(3).max(30).required().messages({
            'any.required': "missing required email field"
        }),
        password: Joi.string().alphanum().min(8).max(32).required().messages({
            'any.required': "missing required password field"
        }),
    }).validate(data);
};

const checkSubscribe = data => {
    data = { subscription: data.subscription };

    return Joi.object().options({ abortEarly: false }).keys({
        subscription: Joi.string().valid(...SUBSCRIBES).required().messages({
            'any.required': "missing required subscription field"
        }),
    }).validate(data);
};

const checkAvatar = data => {
    return {
        value: data,
    };
};

const checkVerifyUser = data => {
    data = {
        email: data.email,
    };
    
    return Joi.object().options({ abortEarly: false }).keys({
        email: Joi.string().email().min(3).max(30).required().messages({
            'any.required': "missing required email field"
        }),
    }).validate(data);
};

const checkUserData = (req, res, next) => {
    let validateSchema;

    switch (req.method) {
        case "POST": if (req.url === '/verify') {
                validateSchema = checkVerifyUser; 
            } else {
                validateSchema = checkNewUser;
            };
            break;
        case "PATCH": if (req.url === '/') {
                validateSchema = checkSubscribe;
            } else if (req.url === '/avatar') {
                validateSchema = checkAvatar;
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

module.exports = checkUserData;