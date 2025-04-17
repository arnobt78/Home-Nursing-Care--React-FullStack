import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// API Route for sending emails
router.post("/api/send-email", async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.VITE_SMTP_HOST, // SMTP host
      port: process.env.VITE_SMTP_PORT, // SMTP port
      secure: process.env.VITE_SMTP_SECURE === "true", // Use SSL/TLS
      auth: {
        user: process.env.VITE_EMAIL_USER, // Email address
        pass: process.env.VITE_EMAIL_PASS, // Email password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Sernitas Care" <${process.env.VITE_EMAIL_USER}>`, // Sender address
      to: process.env.VITE_EMAIL_USER, // Your email address to receive messages
      subject: `New Message from ${fullname}`,
      text: `
        Name: ${fullname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

export default router;
