import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
