# ARTMG

A Canva-inspired creative design editor, built with Next.js App Router (without a `src/` directory), TypeScript, Tailwind CSS, React-Konva, and Zustand.

## Getting started

**Requirements:** Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Included in this starter

- Next.js App Router and TypeScript setup
- Tailwind CSS v4
- ESLint configuration
- ARTMG landing-page starter
- React-Konva and Konva dependencies
- Zustand, Zod, Lucide React
- Feature-oriented folder structure
- shadcn/ui configuration file
- Environment variable example

## Project structure

- `app/` — routes, layouts, global styles, and API routes
- `components/` — reusable interface components
- `features/` — feature-specific editor and design functionality
- `lib/` — shared utilities and service setup
- `store/` — global client-side state
- `types/` — shared TypeScript types
- `hooks/` — shared React hooks
- `public/` — static assets

Some directories contain `.gitkeep` files so the planned structure is visible in Git. Add Prisma when you begin the database milestone; it is intentionally not initialized in this starter.

## Useful commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Next implementation milestone

Build the editor route and canvas foundation first: create a document model, render a Konva stage, then add selection, drag, resize, and rotation interactions.
