# nrinehart.com

Personal portfolio website for Noah Rinehart built with React, TypeScript, and Vite.

🌐 **Live Site**: [https://nrinehart.com](https://nrinehart.com)

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features (flexbox, grid, animations)
- **Linting**: ESLint with TypeScript support
- **Deployment**: GitHub Pages with GitHub Actions

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/noahrinehart/nrinehart.com.git
   cd nrinehart.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch. The deployment workflow:

1. Builds the project using `npm run build`
2. Uploads the `dist` folder as a GitHub Pages artifact
3. Deploys to GitHub Pages environment

## Project Structure

```
src/
├── components/          # React components
│   ├── Home.tsx/css    # Landing page with typing animation
│   ├── Skills.tsx/css  # Skills showcase
│   ├── Career.tsx/css  # Professional experience
│   ├── Life.tsx/css    # Personal interests
│   └── Contact.tsx/css # Contact information
├── App.tsx/css         # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Configuration

- **TypeScript**: Configured with separate configs for app (`tsconfig.app.json`) and build tools (`tsconfig.node.json`)
- **Vite**: Optimized for React with proper base path configuration for GitHub Pages
- **ESLint**: Modern configuration with TypeScript and React support

## License

This project is open source and available under the MIT License.