import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, SignUp, Home, Diet, RingFit } from 'pages';
import { Layout, AccountLayout } from 'components/layout';
import { checkToken } from 'components/utils/LoginValidation';
import { useState } from 'react';

function MainRouter() {
  const hasToken = checkToken();

  const [token, setToken] = useState(null);

  const fakeAuth = () => {
    new Promise(resolve => {
      setTimeout(() => resolve('loginToken10101019hjhk'), 250);
    });
  };

  const handleLogin = async () => {
    const AuthToken = await fakeAuth();
    console.log(AuthToken);
    console.log('click login');
    setToken(AuthToken);
    console.log(token);
  };

  return (
    <>
      <Routes>
        {/* Logged in */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              hasToken ? <Home onLogin={handleLogin} /> : <Navigate replace to="/account/login" />
            }
          />
          <Route path="home" element={<Home onLogin={handleLogin} />} />
          <Route path="diet" element={<Diet />} />
          <Route path="ring-fit" element={<RingFit />} />
        </Route>

        {/* Not logged in */}
        <Route path="account" element={<AccountLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRouter;
