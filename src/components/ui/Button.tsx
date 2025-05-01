import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'solid', 
  size = 'md', 
  fullWidth = false,
  className = '',
  onClick
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantStyles = {
    solid: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    light: 'bg-white hover:bg-gray-100 text-blue-900 focus:ring-blue-500'
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'py-2.5 px-5',
    lg: 'text-lg py-3 px-6'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;