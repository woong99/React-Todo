import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useIsLogin from './useIsLogin';

const PrivateRoute = () => {
  const isAdmin = useIsLogin();
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
