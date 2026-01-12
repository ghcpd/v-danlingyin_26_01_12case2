interface BadgeProps {
  text: string;
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'default';
  className?: string;
}

const Badge = ({ text, variant = 'default', className = '' }: BadgeProps) => {
  const variantClasses = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  return (
    <span 
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${variantClasses[variant]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
