# Chai and Buy

> This project is part of [the Modern Full Stack Next.js Course](https://nextjscourse.dev/?ref=chai-and-code). If you'd like to learn how this project is built, check out the course!

A simple e-commerce app built with [Next.js](https://nextjs.org/) and React, featuring animated cart functionality and a modern UI.

## Features

- Product listing with images, names, and prices
- Add to Cart button for each product
- Animated cart count in the header
- Server Actions to update cart count (demo: uses in-memory variable)
- Responsive, modern design using [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/)
- Smooth UI animations with [motion](https://motion.dev/)
- Iconography via [Lucide](https://lucide.dev/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

## Project Structure

- `app/` – Main app entry, layout, and global styles
- `components/` – UI and feature components (add-to-cart, card, button, etc.)
- `actions/` – Server actions for cart functionality
- `lib/` – Product data and utility functions
- `public/` – Static assets (SVGs, favicon)

## Configuration & Environment

No environment variables are required for local development or demo usage.

## Notes

- The cart count is stored in-memory for demo purposes. In a real app, this would be persisted in a database or session.
- Product images are loaded from Cloudinary.

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui.
