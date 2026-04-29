# 🚀 SolidJS UI Starter Template

A production-ready, high-performance starter template for **SolidJS**, and a pre-configured **Solid UI** setup.

This template is designed to eliminate "setup fatigue" by providing a fully functional environment with a modern, utility-first CSS setup and accessible UI components ready to use out of the box.

## ✨ Key Features

- **⚡ SolidJS**: The fine-grained reactivity you love for ultra-fast performance.
- **🧩 Solid UI**: A collection of pre-built, accessible, and customizable UI components.
- **🛠️ Vite-powered**: Extremely fast development server and optimized production builds.
- **🔷 TypeScript Support**: Fully typed for a superior developer experience and fewer bugs.
- **📦 Zero Config**: Pre-configured PostCSS and Tailwind setup—just clone and start coding.

## 🛠️ Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/)
- **UI Library:** [Solid UI](https://www.solid-ui.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/) (Recommended)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. We recommend using `pnpm` for faster and more efficient dependency management.

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shreeharsh-ambli/solid-app-starter.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd solid-app-starter
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Development

To start the local development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000/`.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

The output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```text
solid-app-starter/
├── components/          # Reusable UI components (Solid UI)
│   └── ui/              # Atomic UI elements (Buttons, Inputs, etc.)
├── src/                 # Main application source code
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── App.tsx          # Main Application component
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles & Tailwind directives
├── public/              # Static files served directly
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 📄 License

This project is licensed under the **MIT License**.

---

_Made with ❤️ for the SolidJS community._
