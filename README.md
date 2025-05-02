# Sernitas Care - Home Care Nursing Service Provider

Sernitas-Care is a comprehensive home nursing service platform in Germany, developed as part of the Sernitas-Groupe. The platform is built with modern web technologies, offering a responsive, user-friendly interface and robust backend functionality. It provides services such as nursing care, client testimonials, job applications, and contact options, all integrated seamlessly.

**Online-Live:** https://develop-testing-1.netlify.app/

---

## Table of Contents

1. Features
2. Tech Stack
3. Project Structure
4. API Endpoints
5. Environment Variables
6. Installation
7. Scripts
8. Routing
9. Backend Server
10. Deployment
11. Contributing
12. License

---

## Features

- **Responsive Design**: Fully optimized for all devices, including desktops, tablets, and mobile phones.
- **Modern UI/UX**: Built with TailwindCSS for a clean, professional, and accessible design.
- **Dynamic Components**: Includes interactive elements like accordions, modals, and testimonials.
- **Lazy Loading**: Efficient loading of components using React's `React.lazy`.
- **Email Integration**: Backend powered by **Express** and **Nodemailer** for sending emails.
- **Smooth Animations**: Integrated with **Framer Motion** for fluid animations.
- **Routing**: Client-side routing with **React Router**.
- **Job Applications**: Users can browse and apply for open positions.
- **Environment Configuration**: Secure environment variables using .env.

---

## Tech Stack

## Frontend

- **React**: Component-based UI library.
- **Vite**: Fast build tool for modern web projects.
- **TailwindCSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library for React.
- **React Icons**: Icon library for React.

## Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Lightweight Node.js framework.
- **Nodemailer**: Email sending service.
- **MongoDB**: NoSQL database for storing application data.
- **Prisma**: ORM for database management.
- **Zod**: Schema validation for form inputs.

## Other Tools

- **ESLint**: Linting for consistent code quality.
- **Prettier**: Code formatting tool.
- **Netlify**: Deployment platform for frontend hosting.

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

## Authentication

- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.

## Services

- `GET /api/services`: Fetch all services.
- `GET /api/services/:id`: Fetch a specific service.

## Job Applications

- `GET /api/jobs`: Fetch all job postings.
- `POST /api/jobs/apply`: Submit a job application.

## Contact

- `POST /api/contact`: Send a contact form message.

---

## Environment Variables

Create a .env file in the root directory and configure the following variables:

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

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arnobt78/sernitas-care.git
   cd sernitas-care
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables in .env.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Start the backend server:

   ```bash
   node server/index.js
   ```

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

---

## Routing

## Public Routes

- `/`: Home page with hero section and services.
- `/about-us`: About Us page.
- `/services`: List of services.
- `/karriere`: Career page with job postings.
- `/contact`: Contact form.

## Private Routes

- `/dashboard`: Admin dashboard (requires authentication).

---

## Backend Server

The backend server is built with **Express** and connects to a **MongoDB** database. It handles:

- User authentication (JWT-based).
- CRUD operations for services and job postings.
- Sending emails via **Nodemailer**.

---

## Deployment

## Frontend Deployment

The frontend is deployed on **Netlify**. To deploy:

1. Push changes to the `main` branch.
2. Netlify automatically builds and deploys the project.

## Backend Server Deployment

The backend is hosted on **Render** or any Node.js-compatible hosting platform. Ensure the .env variables are configured on the hosting platform.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
