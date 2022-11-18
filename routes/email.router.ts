import {EmailService} from '../services/email.service';
import express from "express";
import createEmailDto from "../dto/email.dto";
import validatorHandler from "../middlewares/validator.handler";

const router: express.Router = express.Router();
const service: EmailService = new EmailService();

router.post('/send-notification',
    validatorHandler(createEmailDto, "body"),
    async (req, res, next): Promise<any> => {
        try {
            const {body} = req;
            const data = await service.sendEmail(body);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    });

export default router;