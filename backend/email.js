const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

async function sendOTP(email, otp) {
  await transporter.sendMail({
    from: `"MindCare AI" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "MindCare AI - Email Verification OTP",
    text: `Your MindCare AI verification OTP is ${otp}. This OTP is valid for 10 minutes.`,
  });
}

module.exports = sendOTP;