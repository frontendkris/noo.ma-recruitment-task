import React, { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
  icon?: ReactNode;
  type?: "normal" | "special";
  variant?: 'default' | 'active';
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, icon, variant = 'default', type = 'normal', onClick }) => {
  const baseStyle = `flex items-center gap-2 px-9 md:px-6 lg:px-9 ${type === "normal" ? "py-2.5" : "py-4"} rounded-full text-base font-medium transition`;
  const styles = {
    default: "bg-white text-brand-gray hover:bg-brand-gray hover:text-white",
    active: "bg-brand-gray-dark text-white hover:bg-brand-gray hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]} group`}
    >
      <div className={`${type === "special" ? "group-hover:rotate-[225deg]" : ""}`}>{icon}</div>
      <span className='capitalize leading-none -mb-1'>{label}</span>
    </button>
  );
};
