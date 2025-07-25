import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <div id="overlayer" className="fixed inset-0 z-[9998] bg-[var(--header-color)] transition-opacity duration-800"></div>
      <span className="loader fixed z-[9999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-800">
        <span className="loader-inner"></span>
      </span>
    </>
  );
};

export default PageLoader;

