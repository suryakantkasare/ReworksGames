// src/hooks/useProduct.js
import { useState, useEffect } from 'react';
import { db } from '../config/firebase'; // Firebase config file
import { doc, getDoc } from 'firebase/firestore';

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'products', productId); // Reference to Firestore document
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data()); // Set the product data
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useProduct;
