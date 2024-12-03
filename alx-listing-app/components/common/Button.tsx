import React from 'react';
import { ButtonProps } from '../../interfaces';


const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseStyle = 'rounded-lg font-medium transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-red-500 text-white hover:bg-red-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
