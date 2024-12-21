import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase'; // Firebase imports
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate('/'); // Redirect to login page if not logged in
      } else {
        setUser(currentUser);

        try {
          // Fetch user profile data from Firestore
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          } else {
            setError('No user profile found in Firestore.');
          }
        } catch (err) {
          setError('Error fetching profile data.');
        } finally {
          setLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" style={{ marginTop: '20px' }}>
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: '150px', height: '150px' }}
          />
          <h3 className="card-title mb-3">{profileData ? profileData.firstName : 'User'}</h3>
          <p className="text-muted mb-4">{user.email}</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <strong>First Name</strong>
            <p>{profileData ? profileData.firstName : 'N/A'}</p>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Last Name</strong>
            <p>{profileData ? profileData.lastName : 'N/A'}</p>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Username</strong>
            <p>{profileData ? profileData.userName : 'N/A'}</p>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Mobile</strong>
            <p>{profileData ? profileData.mobileNumber : 'N/A'}</p>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Country</strong>
            <p>{profileData ? profileData.country : 'N/A'}</p>
          </div>
          <div className="col-md-6 mb-3">
            <strong>City</strong>
            <p>{profileData ? profileData.city : 'N/A'}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => {
              auth.signOut().then(() => navigate('/'));
            }}
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
