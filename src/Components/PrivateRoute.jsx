import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Auth from '../Pages/Auth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
if(user)
  return children;
else{
    return <Navigate  to="/auth"></Navigate>
}
 
};

export default PrivateRoute;