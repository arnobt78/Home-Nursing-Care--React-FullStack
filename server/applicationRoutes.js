// import express from "express";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

// const router = express.Router();
// const prisma = new PrismaClient();

// // Admin login route
// router.post("/api/admin/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Validate email and password
//   if (email !== process.env.VITE_ADMIN_EMAIL) {
//     return res.status(401).json({ error: "Invalid email or password" });
//   }

//   // Compare the hashed password
//   const isPasswordValid = await bcrypt.compare(
//     password,
//     process.env.VITE_ADMIN_PASSWORD_HASH || ""
//   );

//   if (!isPasswordValid) {
//     return res.status(401).json({ error: "Invalid email or password" });
//   }

//   res.status(200).json({ message: "Login successful" });
// });

// // Fetch all applications
// router.get("/api/applications", async (req, res) => {
//   try {
//     const applications = await prisma.application.findMany();
//     res.status(200).json(applications);
//   } catch (error) {
//     console.error("Error fetching applications:", error);
//     res.status(500).json({ error: "Failed to fetch applications" });
//   }
// });

// // Save application data
// router.post("/api/applications", async (req, res) => {
//   try {
//     const application = await prisma.application.create({
//       data: req.body,
//     });
//     res.status(201).json(application);
//   } catch (error) {
//     console.error("Error saving application:", error);
//     res.status(500).json({ error: "Failed to save application" });
//   }
// });

// export default router;

import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = express.Router();

// Explicitly pass DATABASE_URL to PrismaClient
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Use DATABASE_URL from environment variables
    },
  },
});

// Admin login route
router.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (email !== process.env.VITE_ADMIN_EMAIL) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(
    password,
    process.env.VITE_ADMIN_PASSWORD_HASH || ""
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.status(200).json({ message: "Login successful" });
});

// Fetch all applications
router.get("/api/applications", async (req, res) => {
  try {
    const applications = await prisma.application.findMany();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

// Save application data
router.post("/api/applications", async (req, res) => {
  try {
    const application = await prisma.application.create({
      data: req.body,
    });
    res.status(201).json(application);
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ error: "Failed to save application" });
  }
});

export default router;
