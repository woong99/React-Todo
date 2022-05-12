import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import isLogin from './isLogin';

const PrivateRoute = () => {
  // const { isLogin } = useContext(UserContext)
  const isAdmin = isLogin();
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
