import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import { FaShoppingCart, FaUserCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout, isAdmin } = useContext(AuthContext); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addtocart">
                <FaShoppingCart /> Cart
              </Link>
            </li>

            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <FaSignInAlt /> Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <FaUserCircle /> Profile
                  </Link>
                </li>
                
                {isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/addnewproduct">
                      Add New Product
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-2"
                    onClick={logout}
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
