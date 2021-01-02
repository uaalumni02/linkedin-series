const Joi = require('@hapi/joi');

const schema = Joi.object({
    color: Joi.string().regex(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/)
        .min(3)
        .max(8)
        .required(),
})

export default schema