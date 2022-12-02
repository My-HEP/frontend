import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useFirebaseAuth } from './context/FirebaseAuthContext';


const ProtectedRoutes=({ allowedRoles }) => {
    const { user, userRole } = useFirebaseAuth() ?? {};

    console.log(user, userRole)

    return user && userRole === allowedRoles[0] ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;