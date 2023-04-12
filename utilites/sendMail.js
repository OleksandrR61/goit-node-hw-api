const nodemailer = require('nodemailer');

const sendMail = (email, verificationToken) => nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_EMAIL_PASS,
    },
}).sendMail({
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Email verification',
    text: `Follow the link to verify your email:
        http://localhost:${process.env.PORT || 3000}/users/verify/${verificationToken}`,            
    html: `
        <p>
            <a href="http://localhost:${process.env.PORT || 3000}/users/verify/${verificationToken}">
                Click me
            </a> to confirm your email.
        </p>`
});

module.exports = sendMail;