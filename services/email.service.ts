import {Mailer} from "../libs/mail.lib";

const mailer = new Mailer(
    "smtp.mailtrap.io",
    2525,
    {
        user: "c878a8db7c6d0d",
        pass: "7a8f3e1d9c33f5"
    }
);

export class EmailService {
    async sendEmail(payload: any): Promise<any> {
        const {destinatarios, mensaje} = payload;
        const mailOptions = {
            from: "'No reply <support@example.com>'",
            to: destinatarios,
            subject: "Notificación",
            html: mensaje,
            text: mensaje
        }
        return await mailer.transporter.sendMail(mailOptions);
    }
}