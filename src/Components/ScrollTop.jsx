import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Run this effect only once after component mount

  return null; // This component doesn't render anything
};

export default ScrollTop;