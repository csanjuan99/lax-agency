import joi from 'joi';

const createEmailDto = joi.object({
    destinatarios: joi.array().items(joi.string().email()).required(),
    mensaje: joi.string().required(),
})

export default createEmailDto;