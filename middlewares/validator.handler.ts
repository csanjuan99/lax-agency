import joi, {StringSchema} from "joi";
import express from "express";

function validatorHandler(schema: joi.ObjectSchema, property: any) {
    return (req: any, res: express.Response, next: express.NextFunction) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(res.status(400).json(
                { message: error.details.map((err: any) => err.message.replace(/['"]+/g, ''))
                }));
        }
        next();
    }
}

export default validatorHandler;