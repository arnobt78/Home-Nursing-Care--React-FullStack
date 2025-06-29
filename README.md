# Sernitas Care – Home Care Nursing Service Platform (Official Website)

<img width="1435" alt="Screenshot 2025-06-07 at 02 30 46" src="https://github.com/user-attachments/assets/e0869bae-9f85-4088-8188-ec7ad956d66b" />

---

Sernitas Care is a comprehensive home nursing service solution developed for the German market as part of the Sernitas-Groupe. This platform enables families and individuals to access professional home care services, browse career opportunities, and get in touch with the Sernitas team—all within a modern, responsive web application.


- **Production:** https://sernitas-care.com/

- **Test Environment:** https://develop-testing-1.netlify.app/

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Installation & Usage](#installation--usage)
- [Scripts](#scripts)
- [Routing](#routing)
- [Backend Server](#backend-server)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Modern UI/UX:** Built with TailwindCSS for an accessible, clean, and professional interface.
- **Dynamic Components:** Interactive UI elements such as accordions, modals, and testimonials.
- **Lazy Loading:** Efficient loading of React components using `React.lazy`.
- **Email Integration:** Backend powered by Express and Nodemailer to process contact forms and job applications.
- **Smooth Animations:** Enhanced user experience with Framer Motion.
- **Client-side Routing:** Seamless navigation using React Router.
- **Job Applications:** Users can view job postings and apply directly via the platform.
- **Secure Configurations:** Environment variables managed through `.env` files.
- **Admin Dashboard:** Secure, authenticated admin section for managing content.

---

## Tech Stack

### Frontend

- **React**: Component-based UI library
- **Vite**: Lightning-fast build tool
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation for React
- **React Icons**: Collection of popular icons

### Backend

- **Node.js**: JavaScript runtime for server-side logic
- **Express**: Minimal and flexible Node.js web application framework
- **Nodemailer**: For sending emails
- **MongoDB**: NoSQL database
- **Prisma**: Type-safe database ORM
- **Zod**: Schema validation for forms and APIs

### Tooling & Deployment

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Netlify**: Frontend hosting
- **Render**: Backend hosting (or any Node.js-compatible host)

---

## Project Structure

```bash
sernitas-care/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar/         # Navigation bar
│   │   ├── Footer/         # Footer section
│   │   ├── Hero/           # Hero section with video background
│   │   ├── Cards/          # Service cards
│   │   ├── AboutUs/        # About Us pages
│   │   ├── Karriere/       # Career-related pages
│   │   ├── Services/       # Service-related pages
│   │   └── Modals/         # Reusable modal components
│   ├── pages/              # Page-level components
│   ├── routes/             # React Router configuration
│   ├── styles/             # Global styles
│   ├── utility/            # Utility functions and helpers
│   └── App.jsx             # Main application entry point
├── server/
│   ├── index.js            # Express server entry point
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── models/             # Database models
│   └── config/             # Configuration files
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## API Endpoints

### Authentication

- `POST /api/auth/login` — User login
- `POST /api/auth/register` — User registration

### Services

- `GET /api/services` — Fetch all services
- `GET /api/services/:id` — Fetch a specific service

### Job Applications

- `GET /api/jobs` — Fetch job postings
- `POST /api/jobs/apply` — Submit a job application

### Contact

- `POST /api/contact` — Contact form submission

---

## Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
VITE_EMAIL_USER=your-email@example.com
VITE_EMAIL_PASS=your-email-password
VITE_SMTP_HOST=smtp.example.com
VITE_SMTP_PORT=465
VITE_SMTP_SECURE=true
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/sernitas-care
JWT_SECRET=your-jwt-secret
```

---

## Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arnobt78/sernitas-care.git
   cd sernitas-care
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**  
   Edit `.env` with your credentials.
4. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
5. **Start the backend server:**
   ```bash
   node server/index.js
   ```

---

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

---

## Routing

### Public Routes

- `/` — Home (hero section, services, testimonials)
- `/about-us` — About Sernitas Care
- `/services` — List of services
- `/karriere` — Career page with job postings
- `/contact` — Contact form

### Private Routes

- `/dashboard` — Admin dashboard (requires authentication)

---

## Backend Server

The backend, built with Express and MongoDB, handles:

- JWT-based user authentication
- CRUD operations for services and job postings
- Email processing via Nodemailer

---

## Deployment

### Frontend

Deployed on **Netlify**.  
Just push to the `main` branch—Netlify will automatically deploy.

### Backend

Host on **Render** or any Node.js-compatible platform.  
Ensure all necessary environment variables are set in your production environment.

---

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to GitHub: `git push origin feature/your-feature`
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
