## Sernitas Care - Home Nursing Service Provider

Sernitas-Care is a dedicated home nursing service platform in Germany and an official member of the Sernitas-Groupe. The platform features React, Vite, TailwindCSS, and Framer Motion technologies. It showcases a modern, responsive, and user-friendly design that emphasizes nursing services, client testimonials, application details (powered by MongoDB, Prisma, and Zod), and contact options (through an SMTP server).

**Online-Live:** https://develop-testing-1.netlify.app/

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Modern UI/UX**: Built with TailwindCSS for a clean and professional design.
- **Dynamic Components**: Includes interactive components like accordions, testimonials, and modals.
- **Lazy Loading**: Uses React's `React.lazy` for efficient loading of components.
- **Email Integration**: Backend powered by **Express** and **Nodemailer** for sending emails.
- **Smooth Animations**: Integrated with **Framer Motion** for smooth animations.
- **Routing**: Client-side routing with **React Router**.
- **Environment Configuration**: Secure environment variables using .env.

## Tech Stack

## Frontend

- **React**: Component-based UI library.
- **Vite**: Fast build tool for modern web projects.
- **TailwindCSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library for React.
- **React Icons**: Icon library for React.

## Backend

- **Express**: Lightweight Node.js framework.
- **Nodemailer**: Email sending service.
- **Body-Parser**: Middleware for parsing request bodies.
- **CORS**: Middleware for handling cross-origin requests.

## Other Tools

- **ESLint**: Linting for consistent code quality.
- **Zod**: Schema validation for form inputs.

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

3. Create a .env file in the root directory and configure the following variables:

   ```env
   VITE_EMAIL_USER=your-email@example.com
   VITE_EMAIL_PASS=your-email-password
   VITE_SMTP_HOST=smtp.example.com
   VITE_SMTP_PORT=465
   VITE_SMTP_SECURE=true
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run the backend server:

   ```bash
   node server.js
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.
