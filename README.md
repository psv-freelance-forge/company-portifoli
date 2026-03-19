# Freelance Forge Portfolio

A premium, high-performance company portfolio built with a cutting-edge tech stack. Designed for maximum visual impact, smooth interactivity, and architectural precision.

## 🚀 Modern Architecture

This project follows a modular and ultra-modern architecture:

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) - Utilizing the latest React 19 features and server-side rendering for peak performance.
- **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) - Next-generation CSS framework with a CSS-first configuration and high-performance build engine.
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) - Integrated momentum-based smooth scrolling for a premium, non-native feel.
- **Interactive Backgrounds**: [React Bits](https://www.react-bits.dev/) - Generative and interactive canvas-based patterns (like ShapeGrid) for deep visual engagement.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Radix UI primitive-based components for consistent and accessible interfaces.

## 🛠️ Core Stack & Libraries

We've carefully selected libraries that prioritize performance, polish, and developer experience:

- **React 19**: Core UI library.
- **Framer Motion**: State-of-the-art animation engine for complex UI transitions.
- **Lucide React**: Beautiful, consistent iconography system.
- **clxs & tailwind-merge**: Essential utilities for dynamic and safe Tailwind class management.
- **Geist Sans/Mono**: Premium typography family optimized for readability and modern aesthetic.

## 📂 Directory Structure

```text
src/
├── app/
│   ├── globals.css      # Core styles & Tailwind v4 config
│   ├── layout.tsx       # Root layout & Smooth Scroll wrapper
│   └── page.tsx         # Main landing page entry
├── components/          # High-level section components
│   ├── Hero.tsx         # Interactive entrance section
│   ├── Navbar.tsx       # Navigation & Brand identity
│   ├── Services.tsx     # Capability showcase
│   ├── Work.tsx         # Project gallery
│   ├── Footer.tsx       # Bottom branding & Links
│   ├── SmoothScroll.tsx # Lenis integration layer
│   └── ui/              # Low-level UI primitives & Shared components
│       ├── button.tsx   # shadcn/ui shared button
│       └── ShapeGrid.tsx # React Bits interactive background
└── lib/
    └── utils.ts         # Utility helpers (cn, etc.)
```

## ⚡ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Build & Deployment

The project is optimized for static export and cloud deployment:

```bash
npm run build
```

---
Built with precision by **Freelance Forge**.
