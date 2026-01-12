# Three.js Knowledge Learning Library

A comprehensive, production-ready learning platform for mastering Three.js 3D graphics on the web. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🎯 Project Overview

This website serves as a complete educational resource for developers learning Three.js. It combines official-style documentation, beginner-friendly tutorials, interactive examples, and fundamental 3D concepts into a single, cohesive learning experience.

### Purpose

- **Learn Three.js**: From basic concepts to advanced techniques
- **Interactive Demos**: See Three.js in action with live, interactive examples
- **Comprehensive Documentation**: Reference for core Three.js concepts
- **Structured Learning Paths**: Guided tutorials for beginners and intermediate developers

## 🛠 Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **3D Graphics**: Three.js
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (install via `npm install -g pnpm`)

## 🚀 Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Claude-Sonnet-4.5
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## 💻 Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗 Production Build

Build the project for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
Claude-Sonnet-4.5/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Badge.tsx        # Difficulty/category badges
│   │   ├── Card.tsx         # Content cards
│   │   ├── CodeSnippet.tsx  # Code display with copy functionality
│   │   ├── Layout.tsx       # Main layout with header/footer
│   │   └── Navigation.tsx   # Top navigation bar
│   ├── pages/               # Page-level components
│   │   ├── Home.tsx         # Landing page
│   │   ├── Documentation.tsx    # API documentation
│   │   ├── Tutorials.tsx    # Step-by-step tutorials
│   │   ├── Examples.tsx     # Examples gallery
│   │   ├── ExampleDetail.tsx    # Individual example with demo
│   │   └── ThreeDBasics.tsx # 3D fundamentals education
│   ├── data/                # Mock data for content
│   │   ├── documentation.ts # Doc concepts (Scene, Camera, etc.)
│   │   ├── tutorials.ts     # Tutorial content
│   │   ├── examples.ts      # Example definitions
│   │   ├── basics.ts        # 3D basic concepts
│   │   └── learningPaths.ts # Learning path definitions
│   ├── three/               # Three.js utilities
│   │   └── sceneUtils.ts    # Scene initialization logic
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared interfaces
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## ✨ Implemented Features

### Pages & Sections

1. **Home Page**
   - Hero section with call-to-action buttons
   - Navigation cards to all main sections
   - Featured learning paths (Beginner/Intermediate)
   - "Why Learn Three.js?" benefits section

2. **Documentation Page**
   - Core concepts: Scene, Camera, Renderer, Geometry, Material, Light
   - Category filtering (Core, Objects, Lighting)
   - Sidebar navigation
   - Detailed view with code snippets
   - Copy-to-clipboard functionality

3. **Tutorials Page**
   - Step-by-step tutorials with difficulty levels
   - Filtering by difficulty (Beginner/Intermediate/Advanced)
   - Numbered steps with explanations
   - Code examples for each step
   - Progress indicators

4. **Examples Page**
   - Gallery of interactive demos
   - Category filtering
   - Visual thumbnails (placeholders)
   - Click to view full demo

5. **Example Detail Page**
   - Live Three.js canvas with rendered demo
   - Full source code with syntax highlighting
   - Back navigation
   - Interactive 3D scenes (rotating cube, lighting, multi-object)

6. **3D Basics Page**
   - Educational content on 3D fundamentals
   - Topics: 3D space, coordinate systems, mesh/geometry/material
   - Diagram placeholders
   - Call-to-action to start learning

### Features

- ✅ Fully responsive design (mobile/tablet/desktop)
- ✅ Accessible navigation with ARIA labels
- ✅ Semantic HTML structure
- ✅ Lazy loading for optimal performance
- ✅ Code snippet copy functionality
- ✅ Interactive Three.js demos
- ✅ Category and difficulty filtering
- ✅ Smooth transitions and hover effects
- ✅ Comprehensive footer with links

## 🎓 How to Use

### Exploring Documentation

1. Navigate to **Documentation** from the top menu
2. Browse concepts by category or view all
3. Click any concept to see detailed explanations and code
4. Copy code snippets to use in your projects

### Following Tutorials

1. Go to **Tutorials** page
2. Filter by difficulty level (Beginner recommended for newcomers)
3. Select a tutorial to view step-by-step instructions
4. Each step includes explanations and code examples
5. Follow along in your own development environment

### Viewing Examples

1. Visit the **Examples** page
2. Click on any example card to view the live demo
3. Interact with the 3D scene (some support mouse interaction)
4. Review the complete source code
5. Copy and modify code for your own projects

### Learning 3D Basics

1. Access **3D Basics** from the navigation
2. Read through fundamental 3D concepts
3. Understand coordinate systems and terminology
4. Use this knowledge when working with Three.js

## 🎨 Customization

### Adding New Documentation

Edit `src/data/documentation.ts` to add new concepts:

```typescript
{
  id: 'new-concept',
  title: 'New Concept',
  category: 'Category',
  description: 'Description here',
  codeSnippet: `// Your code`
}
```

### Adding New Tutorials

Edit `src/data/tutorials.ts` to add tutorials with steps.

### Adding New Examples

1. Add example data to `src/data/examples.ts`
2. Implement scene logic in `src/three/sceneUtils.ts`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with WebGL support

## 🔧 Known Limitations

- Examples use mock Three.js scenes (simplified versions)
- No real-time code editing in examples
- No backend integration or user accounts
- Diagrams are placeholders (can be replaced with actual SVGs)
- OrbitControls not implemented in example demos (can be added)

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

This is a learning platform template. Feel free to extend it with:
- More tutorials and examples
- Advanced Three.js features
- User authentication
- Code playground with live editing
- Community-contributed examples

## 📚 Additional Resources

- [Three.js Official Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

---

Built with ❤️ for the Three.js learning community
