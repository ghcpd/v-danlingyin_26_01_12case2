import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils';

interface SidebarItem {
  id: string;
  label: string;
  href?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  title?: string;
  className?: string;
  children?: ReactNode;
}

export function Sidebar({ items, activeItem, onItemClick, title, className, children }: SidebarProps) {
  return (
    <aside className={cn('w-64 flex-shrink-0', className)}>
      <div className="sticky top-20 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
        {title && <h2 className="text-white font-semibold mb-4">{title}</h2>}
        <nav aria-label="Sidebar navigation">
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = activeItem === item.id;
              const itemClasses = cn(
                'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              );

              if (item.href) {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      className={itemClasses}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onItemClick?.(item.id)}
                    className={itemClasses}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        {children}
      </div>
    </aside>
  );
}
