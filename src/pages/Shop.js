import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import { db } from '../config/firebase';  // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore';
import { Container, Row, Col } from 'react-bootstrap';

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products = [];
        querySnapshot.forEach((doc) => {
          // Add document ID to product data
          products.push({ id: doc.id, ...doc.data() });
        });

        setAllProducts(products);
        const productCategories = ['all', ...new Set(products.map((product) => product.category))];
        setCategories(productCategories);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  // Add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col xs={12} md={3}>
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Col>
        <Col xs={12} md={9}>
          <div className="product-section">
            <h1 className="category-heading text-center mb-4">
              {selectedCategory === 'all' ? 'All Products' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h1>
            <ProductGrid products={filteredProducts} addToCart={addToCart} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
