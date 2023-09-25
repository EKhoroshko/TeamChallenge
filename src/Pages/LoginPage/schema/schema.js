import Joi from "joi";


const emailRegex = new RegExp(
    '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
);
const passwordRegex = new RegExp('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}');

const nameRegex = new RegExp('([0-9a-zA-Z])');

const schemaLogin = Joi.object().keys({
    email: Joi.string()
        .pattern(emailRegex)
        .messages({
            'string.pattern.base': 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot'
        })
        .required(),
    password: Joi.string()
        .min(8)
        .max(25)
        .pattern(passwordRegex)
        .messages({
            'string.min': 'Password contains min 8 characters',
            'string.max': 'Password contains max 25 characters',
            'string.pattern.base': 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)'
        })
        .required(),
});

const schemaRegistration = Joi.object().keys({
    email: Joi.string()
        .pattern(emailRegex)
        .messages({
            'string.pattern.base': 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot'
        })
        .required(),
    password: Joi.string()
        .min(8)
        .max(25)
        .pattern(passwordRegex)
        .messages({
            'string.min': 'Password contains min 8 characters',
            'string.max': 'Password contains max 25 characters',
            'string.pattern.base': 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)'
        })
        .required(),
    username: Joi.string()
        .min(3)
        .max(12)
        .pattern(nameRegex)
        //.trim()
        .messages({
            'string.min': 'Name contains min 3 characters',
            'string.max': 'Name contains max 12 characters',
            'string.pattern.base': 'Username must include only latin letter and number'
        })
        .required(),
});




export {schemaLogin, schemaRegistration};