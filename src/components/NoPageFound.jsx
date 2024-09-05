import React from 'react';

const NoPageFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Page Not Found</p>
      </div>
    </div>
  );
};

export default NoPageFound;
