import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../config/firebase'; // Firebase config
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Assuming db is the Firestore instance

// Create Auth Context
export const AuthContext = createContext();

// Custom Hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info
  const [isAdmin, setIsAdmin] = useState(false); // Store admin status

  useEffect(() => {
    // Subscribe to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch the user's `isAdmin` status from Firestore
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setIsAdmin(userData.isAdmin || false); // Set the isAdmin value (default to false)
        }

        setUser(currentUser); // Set user info
      } else {
        setUser(null); // Clear user if logged out
        setIsAdmin(false); // Clear admin status if logged out
      }
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  // Logout function
  const logout = async () => {
    await signOut(auth);
    setUser(null); // Clear user data on logout
    setIsAdmin(false); // Clear admin status on logout
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, logout }}>
      {children} {/* Provide the context value to child components */}
    </AuthContext.Provider>
  );
};
