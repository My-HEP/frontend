import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFirebaseAuth } from './context/FirebaseAuthContext';

const ProtectedRoutes = ({ allowedRoles }) => {
  const { user, userRole, loading } = useFirebaseAuth() ?? {};
  const location = useLocation();

  if (loading) return null;

  return user && userRole === allowedRoles[0] ? (
    <Outlet context={{ from: location }} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};

export default ProtectedRoutes;
