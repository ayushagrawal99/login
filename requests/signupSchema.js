const Joi = require("joi");

const schemas = {
    signupSchema: Joi.object().keys({
        first_name : Joi.string()
            .regex(new RegExp(/^[a-zA-Z0-9\d\-_\s\)\(\@]+$/i))
            .messages({ "string.pattern.base": "first_name has invalid characters" })
            .required(),
        last_name : Joi.string()
            .regex(new RegExp(/^[a-zA-Z0-9\d\-_\s\)\(\@]+$/i))
            .messages({ "string.pattern.base": "last_name has invalid characters" })
            .required(),
        username : Joi.string()
            .regex(new RegExp(/^[a-zA-Z0-9\d\-_\s\)\(\@]+$/i))
            .messages({ "string.pattern.base": "username has invalid characters" })
            .required(),
        email : Joi.string()
            .email()
            .regex(new RegExp(/^[a-zA-Z0-9\d\-_\.\@]+$/i))
            .messages({ "string.pattern.base": "email has invalid characters" })
            .required(),
        password : Joi.string()
            .messages({ "string.pattern.base": "password has invalid characters" })
            .min(5)
            .max(10)
            .required(),
    }),
};
module.exports = schemas;
