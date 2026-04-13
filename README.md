# devfolio

A personal developer portfolio website built with React, Framer Motion, and Formspree.

## Tech Stack

- **React** — Component-based UI
- **Framer Motion** — Animations and page transitions
- **Formspree** — Contact form handling (no backend required)

## Features

- Smooth animations and transitions powered by Framer Motion
- Responsive layout across all screen sizes
- Functional contact form via Formspree
- Fast and lightweight — no backend needed

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/devfolio.git
cd devfolio
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or `http://localhost:3000` depending on your setup).

### Building for Production

```bash
npm run build
```

## Configuration

### Contact Form (Formspree)

The contact form is powered by [Formspree](https://formspree.io). To connect it to your own account:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form endpoint
3. Replace the form action URL in the contact component with your endpoint:

```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
```

## Deployment

This site can be deployed to any static hosting provider:

- **Vercel** — `vercel deploy`
- **Netlify** — drag and drop the `dist/` folder or connect via Git
- **GitHub Pages** — use the `gh-pages` package

## Project Structure

```
devfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Navbar.jsx
│   ├── sections/
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── HeroProject.jsx
│   │   └── Skill.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## License

MIT