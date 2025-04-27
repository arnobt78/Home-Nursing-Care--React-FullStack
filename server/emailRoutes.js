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

// Add a new route for application submission notification
router.post("/api/send-application-notification", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, age, gender } = req.body;

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
      to: process.env.VITE_EMAIL_USER, // Your email address to receive notifications
      subject: "New Application Submitted",
      text: `
        A new application has been submitted.

        Applicant Name: ${firstName} ${lastName}
        Applicant Email: ${email}
        Applicant Phone: ${phone}
        Applicant Age: ${age}
        Applicant Gender: ${gender}

        Please check the admin dashboard for more details.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Notification email sent successfully" });
  } catch (error) {
    console.error("Error sending notification email:", error);
    res.status(500).json({
      error: "Error sending notification email",
      details: error.message,
    });
  }
});

// New API Route for HomeConsultationSection
router.post("/api/send-home-consultation-email", async (req, res) => {
  try {
    const { fullname, phone, consent } = req.body;

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
      subject: `New Callback Request from ${fullname}`,
      text: `
        Name: ${fullname}
        Phone: ${phone}
        Consent: ${consent ? "Yes" : "No"}
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

// New API Route for BewerbenPage (Job Application)
router.post("/api/send-job-application", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      degree,
      company,
      country,
      email,
      phone,
      linkedin,
      subject,
      message,
    } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.VITE_SMTP_HOST,
      port: process.env.VITE_SMTP_PORT,
      secure: process.env.VITE_SMTP_SECURE === "true",
      auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Sernitas Care" <${process.env.VITE_EMAIL_USER}>`,
      to: process.env.VITE_EMAIL_USER,
      subject: `Neue Bewerbung: ${firstname} ${lastname}`,
      text: `
Neue Bewerbung erhalten:

Vorname: ${firstname}
Nachname: ${lastname}
Geschlecht: ${gender}
Abschluss: ${degree}
Unternehmen: ${company}
Aufenthaltsland: ${country}
E-Mail: ${email}
Telefonnummer: ${phone}
LinkedIn: ${linkedin}

Betreffzeile: ${subject}

Anfrage:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Bewerbung erfolgreich gesendet!" });
  } catch (error) {
    console.error("Fehler beim Senden der Bewerbung:", error);
    res.status(500).json({
      error: "Fehler beim Senden der Bewerbung",
      details: error.message,
    });
  }
});

export default router;
