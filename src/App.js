import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthContext provider and useAuth hook
import EmailAuth from './pages/EmailAuth';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddNewProduct from './pages/AddNewProduct';
import Shop from './pages/Shop';
import AddCartPage from './pages/AddCartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer';
// ProtectedRoute component for general users
const ProtectedRoute = ({ element, adminOnly = false }) => {
  const { user, isAdmin } = useAuth(); // Get user and isAdmin status from context

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/" />; // Redirect to the login page if not authenticated
  }

  // If the route is admin-only and the user is not an admin, redirect to home page
  if (adminOnly && !isAdmin) {
    return <Navigate to="/home" />; // Redirect to home if the user is not an admin
  }

  // If user has access, render the protected route
  return element;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Include Navbar component */}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/login" element={<EmailAuth />} /> {/* Login Page */}
          <Route path="/shop" element={<Shop />} /> {/* Shop Page */}
          <Route path="/addtocart" element={<AddCartPage />} /> {/* Cart Page */}

          {/* Protected Routes for General Users */}
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          /> {/* User Profile (protected) */}

          {/* Admin-Only Routes */}
          <Route
            path="/addnewproduct"
            element={<ProtectedRoute element={<AddNewProduct />} adminOnly />}
          /> {/* Add New Product (protected, admin-only) */}

          {/* Dynamic route for product details */}
          <Route path="/product/:productId" element={<ProductDetailPage />} />

          {/* Fallback route for unknown routes */}
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
