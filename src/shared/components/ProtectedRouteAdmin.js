import { useFirebaseAuth } from '../../context/FirebaseAuthContext';
import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProtectedRouteAdmin(props) {
  const { userRole } = useFirebaseAuth();

  return userRole === 'THERAPIST' ? <Outlet /> : <Navigate to="/" />;
}
