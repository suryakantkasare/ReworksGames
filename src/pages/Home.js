import React from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import { auth } from '../config/firebase'; // Import the Firebase auth configuration
// import { signOut } from 'firebase/auth'; // Firebase Auth signOut method
// import Shop from './Shop'; // Import Shop component to show products
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import WelcomeSection from '../components/WelcomeSection';
const Home = () => {
  // const navigate = useNavigate();


  return (
    <div className="container">
    

      {/* Section for the Shop component */}
      <WelcomeSection/>
      <section>
        <h2 className="my-4">Explore Products</h2>
        {/* <Shop /> Display the Shop component */}
      </section>

      
    </div>
  );
};

export default Home;
