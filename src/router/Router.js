import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="/main" element={<Main />} />
        <Route path="/main/:id" element={<Main />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
