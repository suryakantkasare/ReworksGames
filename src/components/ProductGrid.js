import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
