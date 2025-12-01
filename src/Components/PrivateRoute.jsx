import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Auth from '../Pages/Auth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const loc=useLocation();
    const {user,loading}=useContext(AuthContext);
    if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-ring loading-lg text-blue-600"></span>
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Please wait...
        </p>
      </div>
    </div>
  );
}

if(user)
  return children;
else{
    return <Navigate state={loc.pathname}  to="/auth"></Navigate>
}
 
};

export default PrivateRoute;