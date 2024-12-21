import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; 
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'; 
import { useAuth } from '../context/AuthContext'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ProductDetailPage = () => {
  const { productId } = useParams();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productRef);

        if (docSnapshot.exists()) {
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          setError('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleBuyNow = async () => {
    if (!user) {
      alert('You need to be logged in to make a purchase');
      return;
    }

    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        buy: arrayUnion(productId),
      });
      alert('Product purchased successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error purchasing product:', error);
      alert('Something went wrong, please try again later.');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.coverImage}
            alt={product.title}
            className="img-fluid rounded shadow-lg mb-4"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="display-4 font-weight-bold">{product.name}</h2>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted text-decoration-line-through">${product.price}</span>
            <span className="text-danger display-4">${product.discountPrice}</span>
          </div>
          <div className="mb-3">
            <div>{product.description}</div>
            <div className="text-warning mt-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < averageRating ? 'bi bi-star-fill' : 'bi bi-star'}
                ></span>
              ))}
            </div>
            <span className="ml-2">({averageRating.toFixed(1)})</span>
          </div>
          <p className="lead">{product.shortDescription}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Available from:</strong> {new Date(product.schedule).toLocaleDateString()}</p>
          <button className="btn btn-lg btn-danger mt-4 w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-5">
        <h3 className="font-weight-bold">Image Gallery</h3>
        <div className="row">
          {product.galleryImages.map((image, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-5">
        <h3 className="font-weight-bold">Customer Reviews</h3>
        {product.reviews.map((review, index) => (
          <div className="card mb-3 shadow-sm" key={index}>
            <div className="card-body">
              <h5 className="card-title">{review.user}</h5>
              <div className="card-text text-warning">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className={starIndex < review.rating ? 'bi bi-star-fill' : 'bi bi-star'}></span>
                ))}
              </div>
              <p>{review.comment}</p>
              <small className="text-muted">{new Date(review.date).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
