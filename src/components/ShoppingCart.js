import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShoppingCart = ({ cart, showCart, handleClose }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <Modal show={showCart} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="list-unstyled">
            {cart.map((product, index) => (
              <li key={index} className="d-flex justify-content-between mb-2">
                <span>{product.title}</span>
                <span>${product.price}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="d-flex justify-content-between">
          <h5>Total: </h5>
          <h5>${totalAmount}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
