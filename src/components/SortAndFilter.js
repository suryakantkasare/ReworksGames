import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SortAndFilter = ({ categories, onSortChange, onCategoryChange, onPriceRangeChange }) => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <div className="d-flex">
        <Form.Control as="select" onChange={e => onSortChange(e.target.value)}>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </Form.Control>
        <Form.Control as="select" onChange={e => onCategoryChange(e.target.value)} className="ml-3">
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </Form.Control>
        <Form.Control as="select" onChange={e => onPriceRangeChange(e.target.value)} className="ml-3">
          <option value="">All Prices</option>
          <option value="under50">$0 - $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="over100">$100+</option>
        </Form.Control>
      </div>
    </div>
  );
};

export default SortAndFilter;
