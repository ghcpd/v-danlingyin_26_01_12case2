import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-300 text-sm">
                A comprehensive learning platform for Three.js, helping developers
                master 3D web graphics through documentation, tutorials, and examples.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="/examples" className="text-gray-300 hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Official Three.js</a></li>
                <li><a href="/3d-basics" className="text-gray-300 hover:text-white transition-colors">3D Basics</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Three.js Knowledge Library. Built with React and Three.js.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
