const nodemailer = require('nodemailer');

async function sendEmail(userEmail, subject, message) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // Use true for 465, false for other ports
            auth: {
                user: "tabrez.hira1995@gmail.com", // Your Gmail address
                pass: "Hamza.447"  // Use your App Password here
            }
        });

        let mailOptions = {
            from: 'your-email@gmail.com',
            to: userEmail,
            subject: subject,
            text: message
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email.' };
    }
}

// Example usage

module.exports = sendEmail;

