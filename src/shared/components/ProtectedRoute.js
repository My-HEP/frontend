import { useFirebaseAuth } from '../../context/FirebaseAuthContext';
import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProtectedRoute(props) {
  const { userRole } = useFirebaseAuth() ?? {};

  //   const fetchUserRole = async (req, res) => {
  //     setIsLoading(true);
  //     const response = await fetch(`http://localhost:3001/user/${uid}`);
  //     const userResponse = await response.json();
  //     setUserRole(userResponse.role);
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     fetchUserRole();
  //   }, []);

  return userRole ? <Outlet /> : <Navigate to="/" />;
}
