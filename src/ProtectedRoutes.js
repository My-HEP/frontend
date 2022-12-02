import { useState } from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import { useFirebaseAuth } from './context/FirebaseAuthContext';


const ProtectedRoutes=({ allowedRoles }) => {
    const { auth } = useFirebaseAuth() ?? {};
    const location = useLocation();
    const uid = auth?.currentUser?.uid;
    const [userRole, setUserRole] = useState('PATIENT');
    

    const fetchUserRole = async (req, res) => {
       const response = await fetch(`http://localhost:3001/user/${uid}`);
       const userResponse = await response.json();
       setUserRole(userResponse.role);
   };
    fetchUserRole();
    return auth && userRole === allowedRoles[0] ? <Outlet /> : <Navigate to='/' state={{from: location}} replace />
}

export default ProtectedRoutes;