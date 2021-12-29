import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="text-white text-3xl font-bold uppercase border-2 rounded-lg p-4 w-64 tracking-wide text-center hover:bg-white hover:text-green-900 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
