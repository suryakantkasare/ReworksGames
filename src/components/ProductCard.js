import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="product-card shadow-lg mb-4 border-0" style={{ transition: 'all 0.3s ease' }}>
      <Card.Img variant="top" src={product.coverImage} alt={product.name} className="card-img-top" />
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <span className="text-danger fw-bold">${product.discountPrice}</span>
            <del className="ms-2 text-muted">${product.price}</del>
          </div>
          {product.discountPrice < product.price && (
            <Badge pill bg="danger" className="mt-2">
              {((1 - product.discountPrice / product.price) * 100).toFixed(0)}% OFF
            </Badge>
          )}
        </Card.Text>
        <Button 
          variant="primary" 
          className="w-100 mt-2"
          onClick={() => addToCart(product)} // Add to cart
        >
          <FaShoppingCart className="me-2" /> Add to Cart
        </Button>
        <Link to={`/product/${product.id}`} className="btn btn-link mt-2">View Details</Link> {/* View Details link */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
