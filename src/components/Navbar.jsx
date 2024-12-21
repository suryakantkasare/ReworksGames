import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaShoppingCart, FaUserCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

const NavbarAndSocial = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);

  return (
    <div>
     
      {/* Navbar */}
      <BootstrapNavbar expand="lg" bg="light-gray" variant="light" className="shadow-sm py-3 mb-0 bg-light py-5">
        <Container fluid>
          <Link className="navbar-brand fs-3 text-dark fw-bold" to="/">MyStore</Link>
          <BootstrapNavbar.Toggle aria-controls="navbarNav" />
          <BootstrapNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/shop">Shop</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/addtocart">
                  <FaShoppingCart className="fs-4" /> Cart
                </Link>
              </Nav.Item>

              {!user ? (
                <Nav.Item>
                  <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/login">
                    <FaSignInAlt className="fs-4" /> Login
                  </Link>
                </Nav.Item>
              ) : (
                <>
                  <Nav.Item>
                    <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/profile">
                      <FaUserCircle className="fs-4" /> Profile
                    </Link>
                  </Nav.Item>

                  {isAdmin && (
                    <Nav.Item>
                      <Link className="nav-link fs-5 text-dark p-3 hover-effect rounded-0" to="/addnewproduct">Add New Product</Link>
                    </Nav.Item>
                  )}
                  <Nav.Item>
                    <Button variant="secondary" onClick={logout} className="ms-2 fs-5 py-2 px-4">
                      <FaSignOutAlt className="fs-4" /> Logout
                    </Button>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

    </div>
  );
};

export default NavbarAndSocial;
