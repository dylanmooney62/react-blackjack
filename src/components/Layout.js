import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-hero-pattern w-full h-screen bg-cover bg-center">
      <div className="h-full container mx-auto p-4 py-24 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
