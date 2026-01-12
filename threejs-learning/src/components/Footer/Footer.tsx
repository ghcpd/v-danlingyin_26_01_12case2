import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12,2 22,20 2,20" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">Three.js Learning Library</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              A comprehensive learning platform for developers exploring 3D web development with
              Three.js. From basics to advanced concepts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/basics" className="text-slate-400 hover:text-white text-sm transition-colors">
                  3D Basics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://threejs.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Official Three.js Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrdoob/three.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://discourse.threejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Three.js Learning Library. Built for learning purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
