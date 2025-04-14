// import express from "express";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(bodyParser.json());

// // Allow requests from multiple origins (http://localhost:5173 and http://localhost:5175)
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5175"], // Allow multiple origins
//   })
// );

// // Alternatively, to allow requests from any origin during development, use this:
// // app.use(cors({ origin: "*" })); // Uncomment this line if you want to allow all origins

// // API Route
// app.post("/api/send-email", async (req, res) => {
//   try {
//     const { fullname, email, phone, message } = req.body;

//     // Configure nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       host: process.env.VITE_SMTP_HOST, // SMTP host
//       port: process.env.VITE_SMTP_PORT, // SMTP port
//       secure: process.env.VITE_SMTP_SECURE === "true", // Use SSL/TLS
//       auth: {
//         user: process.env.VITE_EMAIL_USER, // Email address
//         pass: process.env.VITE_EMAIL_PASS, // Email password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: `"Sernitas Care" <${process.env.VITE_EMAIL_USER}>`, // Sender address
//       to: process.env.VITE_EMAIL_USER, // Your email address to receive messages
//       subject: `New Message from ${fullname}`,
//       text: `
//         Name: ${fullname}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Respond with success
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res
//       .status(500)
//       .json({ error: "Error sending email", details: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// import express from "express";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());

// // Allow requests from multiple origins (Netlify and localhost)
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", // Local frontend
//       "https://develop-testing-1.netlify.app", // Netlify frontend
//     ],
//     methods: ["GET", "POST", "OPTIONS"], // Allow specific HTTP methods
//     allowedHeaders: ["Content-Type"], // Allow specific headers
//     credentials: true, // Allow cookies and credentials
//   })
// );

// // Default route for Render
// app.get("/", (req, res) => {
//   res.send("Sernitas Care Backend is Running!");
// });

// // API Route for sending emails
// app.post("/api/send-email", async (req, res) => {
//   try {
//     const { fullname, email, phone, message } = req.body;

//     // Configure nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       host: process.env.VITE_SMTP_HOST, // SMTP host
//       port: process.env.VITE_SMTP_PORT, // SMTP port
//       secure: process.env.VITE_SMTP_SECURE === "true", // Use SSL/TLS
//       auth: {
//         user: process.env.VITE_EMAIL_USER, // Email address
//         pass: process.env.VITE_EMAIL_PASS, // Email password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: `"Sernitas Care" <${process.env.VITE_EMAIL_USER}>`, // Sender address
//       to: process.env.VITE_EMAIL_USER, // Your email address to receive messages
//       subject: `New Message from ${fullname}`,
//       text: `
//         Name: ${fullname}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Respond with success
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res
//       .status(500)
//       .json({ error: "Error sending email", details: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import applicationRoutes from "./server/applicationRoutes.js"; // Corrected import path

dotenv.config();

const app = express(); // Initialize app here
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Allow requests from multiple origins (Netlify and localhost)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
      "https://develop-testing-1.netlify.app", // Netlify frontend
    ],
    methods: ["GET", "POST", "OPTIONS"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
    credentials: true, // Allow cookies and credentials
  })
);

// Use application routes
app.use(applicationRoutes); // Moved after app initialization

// Default route for Render
app.get("/", (req, res) => {
  res.send("Sernitas Care Backend is Running!");
});

// API Route for sending emails
app.post("/api/send-email", async (req, res) => {
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
