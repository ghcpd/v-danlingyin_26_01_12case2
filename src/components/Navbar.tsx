import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/docs', label: 'Documentation' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/examples', label: 'Examples' },
  { to: '/basics', label: '3D Basics' }
];

export const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-midnight/80 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-white">
          <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-accentDeep grid place-items-center text-midnight font-bold">
            3D
          </span>
          <div className="flex flex-col leading-tight">
            <span>Three.js Knowledge</span>
            <span className="text-xs text-white/60">Learn by reading & doing</span>
          </div>
        </Link>

        <button
          className="lg:hidden rounded-lg border border-white/20 p-2 text-white"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${open ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-glass"
                href="#examples"
              >
                Explore examples
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
