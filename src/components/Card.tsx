import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ title, description, children, className = '', onClick }: CardProps) => {
  const baseClasses = "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden";
  const clickableClasses = onClick ? "cursor-pointer hover:scale-105 transition-transform" : "";

  return (
    <div 
      className={`${baseClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
