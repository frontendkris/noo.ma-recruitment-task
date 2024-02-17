import React, { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: 'default' | 'active';
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, icon, variant = 'default', onClick }) => {
  const baseStyle = "flex items-center gap-2 px-9 py-2.5 rounded-full text-base font-medium transition";
  const styles = {
    default: "bg-white text-brand-gray hover:bg-brand-gray hover:text-white",
    active: "bg-brand-gray-dark text-white hover:bg-brand-gray hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]}`}
    >
      {
        !!icon && icon
      }
      <span className='capitalize'>{label}</span>
    </button>
  );
};
