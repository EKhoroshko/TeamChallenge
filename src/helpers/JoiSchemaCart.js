import Joi from 'joi';

const regex = new RegExp('^[a-zA-Zа-яА-Я]+$');
const regexPhone = new RegExp('^\\+\\d{12}$');

export const schema = Joi.object({
  surname: Joi.string()
    .trim()
    .min(2)
    .rule({
      message: 'Surname must be more 2 letters',
    })
    .max(15)
    .rule({
      message: 'Surname not must be more 15 letters',
    })
    .pattern(regex)
    .rule({ message: 'Invalid format' })
    .required(),
  name: Joi.string()
    .trim()
    .min(3)
    .rule({ message: 'Name must be more 3 letters' })
    .max(12)
    .rule({ message: 'Name not must be more 12 letters' })
    .pattern(regex)
    .rule({ message: 'Invalid format' })
    .required(),
  phone: Joi.string()
    .trim()
    .pattern(regexPhone)
    .rule({ message: 'Phone number must contain 12 digits' })
    .required(),
  email: Joi.string()
    .trim()
    .email({
      minDomainSegments: 1,
      tlds: { allow: ['com', 'net', 'ua', 'de'] },
    })
    .rule({ message: 'Invalid format mail' }),
});
