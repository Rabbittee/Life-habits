import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, SignUp, Home, Diet, RingFit } from 'pages';
import { Layout, AccountLayout } from 'components/layout';
import { checkToken } from 'components/utils/LoginValidation';

function MainRouter() {
  const hasToken = checkToken();

  return (
    <>
      <Routes>
        {/* Logged in */}
        <Route path="/" element={<Layout />}>
          <Route index element={hasToken ? <Home /> : <Navigate replace to="/account/login" />} />
          <Route path="home" element={<Home />} />
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
