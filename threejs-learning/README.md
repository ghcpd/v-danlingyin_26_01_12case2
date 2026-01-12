# Three.js Knowledge Learning Library

A comprehensive learning platform for developers exploring 3D web development with Three.js. Built with React, TypeScript, and Tailwind CSS.

## 🎯 Purpose

This website serves as a learning-oriented platform designed to help developers understand and explore Three.js. It combines:

- **Official-style documentation summaries** - Core concepts explained with code examples
- **Beginner-friendly tutorials** - Step-by-step guides to build your skills
- **Interactive examples gallery** - See Three.js in action with live demos
- **Background knowledge about 3D concepts** - Foundational understanding of 3D graphics

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **3D Graphics**: Three.js
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd threejs-learning

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🚀 Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## 📁 Project Structure

```
threejs-learning/
├── public/              # Static assets
│   └── vite.svg         # Favicon
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button/      # Button component
│   │   ├── Card/        # Card component
│   │   ├── CodeBlock/   # Code syntax display
│   │   ├── Footer/      # Site footer
│   │   ├── Navigation/  # Top navigation bar
│   │   ├── SearchInput/ # Search input component
│   │   ├── Sidebar/     # Sidebar navigation
│   │   └── Tabs/        # Tab navigation
│   ├── data/            # Mock data files
│   │   ├── basics.ts    # 3D basics content
│   │   ├── documentation.ts  # Documentation data
│   │   ├── examples.ts  # Examples data
│   │   └── tutorials.ts # Tutorials data
│   ├── hooks/           # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useSearch.ts
│   │   └── useWindowSize.ts
│   ├── pages/           # Page components
│   │   ├── BasicsPage/
│   │   ├── DocumentationPage/
│   │   ├── ExampleDetailPage/
│   │   ├── ExamplesPage/
│   │   ├── HomePage/
│   │   └── TutorialsPage/
│   ├── three/           # Three.js demo components
│   │   └── ThreeCanvas.tsx
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   │   ├── clsx.ts
│   │   └── index.ts
│   ├── App.tsx          # Root component with routing
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## ✨ Implemented Features

### Pages

1. **Home Page**
   - Hero section with animated Three.js cube
   - Navigation entry points to all sections
   - Featured learning paths (Beginner / Intermediate)
   - Feature highlights

2. **Documentation Page**
   - Sidebar navigation for concepts
   - Search functionality
   - Code snippets for each concept
   - Topics: Scene, Camera, Renderer, Geometry, Material, Light

3. **Tutorials Page**
   - Step-by-step tutorials
   - Difficulty filtering (Beginner / Intermediate / Advanced)
   - Search functionality
   - Tutorial detail view with step-by-step instructions

4. **Examples Page**
   - Gallery of example cards
   - Category filtering (Geometry, Lighting, Controls, Animation)
   - Search functionality
   - Interactive thumbnails

5. **Example Detail Page**
   - Live Three.js canvas demo
   - Full source code display
   - Related examples navigation

6. **3D Basics Page**
   - Educational content on 3D concepts
   - Topics: 3D Space, Coordinate Systems, Mesh/Geometry/Material
   - ASCII diagrams for visualization

### Components

- **Navigation**: Responsive top navigation with mobile menu
- **Footer**: Site footer with quick links
- **CodeBlock**: Syntax-highlighted code display with copy button
- **Card**: Reusable card component for content display
- **Button**: Styled button component with variants
- **SearchInput**: Search input with clear functionality
- **Tabs**: Tab navigation component
- **Sidebar**: Sidebar navigation component

### Technical Features

- ✅ Fully responsive design (mobile / tablet / desktop)
- ✅ TypeScript strict mode enabled
- ✅ Lazy loading for pages (code splitting)
- ✅ Semantic HTML structure
- ✅ ARIA labels for accessibility
- ✅ Custom hooks for state management
- ✅ Mock data for all content
- ✅ Three.js integration for demos

## 🎨 Design

- Dark theme optimized for code readability
- Gradient accents using primary (blue) and accent (purple) colors
- Consistent spacing and typography
- Smooth transitions and hover effects

## 📱 Responsiveness

The application is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible navigation menu on mobile
- Adaptive layouts for all screen sizes

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 🔧 Known Limitations

- Code examples are static (no live editing)
- Three.js demos are simplified versions
- No backend integration (all data is mocked)
- No authentication system
- No real-time code execution

## 📄 License

MIT License - Built for educational purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own learning purposes.
