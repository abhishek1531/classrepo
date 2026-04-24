const Joi = require("joi");

const schemaValidation = Joi.object({
    name: Joi.string()
        .required()
        .messages({ "string.empty": "The Given request has Empty String!!!" }),

    mobile: Joi.number().required(),

    studentEmail: Joi.string().email(),

    hobbies: Joi.array().items(
        Joi.string()
            .required()
            .messages({ "string.empty": "The given request has empty hobby!!!" })
    )
});

module.exports = schemaValidation;