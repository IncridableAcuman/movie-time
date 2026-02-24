const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process?.env?.MAIL_USER || "abdusharipovizzat03@gmail.com",
                pass: process?.env?.MAIL_PASSWORD || "olrjnjigzdquzomc "
            }
        });
    }
    async sendMail(email, token) {
        await this.transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: "Reset Password",
            html: ` <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
                <div style="text-align: center; padding: 10px;">
                    <h2 style="color: #333;">🔑 Reset Your Password</h2>
                    <p style="color: #555; font-size: 16px;">Hello,</p>
                    <p style="color: #555; font-size: 16px;">
                        We received a request to reset your password. Click the button below to reset your password:
                    </p>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="${token}" 
                       style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">
                        Reset Password
                    </a>
                </div>
                <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
                    <p>If you did not request a password reset, please ignore this email.</p>
                    <p>For security reasons, this link will expire in 15 minutes.</p>
                    <p>© 2026 Movie Time. Izzatbek Abdusharipov</p>
                </div>
            </div>`
        })
    }
}
module.exports = new MailService();