import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    // Remove the product from the cart by filtering out the selected product
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, action) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (action === 'increase') item.quantity += 1;
        if (action === 'decrease' && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">Shopping Cart</h1>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Row className="g-0">
                  <Col md={3}>
                    <Card.Img variant="top" src={item.image} alt={item.name} />
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>
                        Price: ${item.price}
                      </Card.Text>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, 'decrease')}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, 'increase')}
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col md={3}>
                    <Card.Body className="text-center">
                      <Card.Text>
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </Card.Text>
                      <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <h4>Your cart is empty</h4>
          )}
        </Col>
      </Row>
      {cartItems.length > 0 && (
        <Row className="mt-4">
          <Col className="text-end">
            <h4>Total: ${calculateTotal()}</h4>
            <Link to="/checkout">
              <Button variant="success">Proceed to Checkout</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AddCartPage;
