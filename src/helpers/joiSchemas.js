// eslint-disable-next-line no-undef
const Joi = require('joi');

const schemaSubscribe = Joi.string()
  .email()
  .pattern(
    new RegExp(
      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
    ),
  );

export { schemaSubscribe };

let mail = jfahfj.asd;

console.log(schemaSubscribe(mail));
