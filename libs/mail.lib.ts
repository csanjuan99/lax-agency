import nodeMailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class Mailer {
    public transporter: Mail;

    constructor(host: string, port: number, auth: { user: string, pass: string }) {
        this.transporter = nodeMailer.createTransport({
            host: host,
            port: port,
            auth: auth,
        });
    }
}
