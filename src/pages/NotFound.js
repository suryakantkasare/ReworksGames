import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const NotFound = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/home'); // Navigate to /home route
    }, 3000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center my-5">
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <p>Redirecting you to the home page...</p>
    </div>
  );
};

export default NotFound;
