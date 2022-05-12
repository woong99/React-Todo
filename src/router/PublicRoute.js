import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../store/Datas';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogin } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? <Navigate replace to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
