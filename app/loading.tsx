'use client';

import { useState, useEffect } from 'react';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading indicator after 500ms
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500); // Hide loading after 500ms

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) {
    return null; // Do not render anything if loading is not shown
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-background z-50">
      <div className="rounded-full h-20 w-20 bg-violet-800 animate-pulse"></div>
    </div>
  );
}