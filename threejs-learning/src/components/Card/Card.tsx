import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '../../utils';

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
  badgeColor?: string;
  thumbnail?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  badge,
  badgeColor = 'bg-primary-100 text-primary-800',
  thumbnail,
  children,
  className,
}: CardProps) {
  const content = (
    <>
      {thumbnail && (
        <div className="aspect-video bg-slate-800 rounded-t-lg overflow-hidden flex items-center justify-center">
          {thumbnail}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-white text-lg">{title}</h3>
          {badge && (
            <span className={cn('px-2 py-0.5 rounded text-xs font-medium', badgeColor)}>
              {badge}
            </span>
          )}
        </div>
        {description && <p className="text-slate-400 text-sm mb-4">{description}</p>}
        {children}
      </div>
    </>
  );

  const cardClasses = cn(
    'bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all',
    href && 'hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer',
    className
  );

  if (href) {
    return (
      <Link to={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
