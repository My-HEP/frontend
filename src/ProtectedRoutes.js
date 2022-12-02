import React from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import { useFirebaseAuth } from './context/FirebaseAuthContext';


const ProtectedRoutes=({ allowedRoles }) => {
    const { auth, userRole } = useFirebaseAuth() ?? {};
    const location = useLocation();

    return auth && userRole === allowedRoles[0] ? <Outlet /> : <Navigate to='/' state={{from: location}} replace />
}

export default ProtectedRoutes;