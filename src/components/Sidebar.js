import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa'; // Example for adding icons

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sidebar bg-light p-3 rounded">
      <h2 className="sidebar-title text-center mb-4">Categories</h2>
      <Nav className="flex-column">
        {categories.map((category) => (
          <Nav.Item key={category}>
            <Nav.Link
              href="#"
              className={`category-item text-capitalize ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {category === 'all' ? 'All Products' : category}
              <FaAngleRight className="ms-2" />
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
