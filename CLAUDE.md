# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite web application for nrinehart.com. It uses a modern development stack with fast HMR (Hot Module Replacement) via Vite.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a standard Vite React application with the following structure:

- **Entry Point**: `src/main.tsx` - Renders the React app into the DOM
- **Main Component**: `src/App.tsx` - Root component of the application
- **Build Tool**: Vite with React plugin for fast development and optimized production builds
- **Type Checking**: TypeScript with separate configs for app code (`tsconfig.app.json`) and build tools (`tsconfig.node.json`)
- **Linting**: ESLint configuration in `eslint.config.js`

The project follows a typical React SPA pattern where `index.html` serves as the HTML entry point, and Vite handles module loading and HMR during development.