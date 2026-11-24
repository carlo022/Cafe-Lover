# Cafe-Lover

A modern, responsive coffee shop website built with React and Vite. Cafe-Lover presents a café's hero section, menu, photo gallery, contact information, and a light/dark theme toggle.

## Features

- Responsive navigation and page sections
- Featured menu with animated content
- Café photo gallery
- Contact and location information
- Light and dark themes
- Smooth animations powered by Framer Motion
- Iconography from Lucide React

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint

## Project Structure

```text
Cafe-Lover/
├── public/          # Static assets and favicons
├── src/
│   ├── assets/      # Images and imported resources
│   ├── components/  # Reusable UI components
│   ├── context/     # React context providers
│   ├── sections/    # Hero, menu, gallery, and contact sections
│   ├── App.jsx      # Main application component
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/carlo022/Cafe-Lover.git
cd Cafe-Lover
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

### Run the Linter

```bash
npm run lint
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

No license has been specified for this project.
