import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Home, Diet, RingFit } from 'pages';
import { Layout, AccountLayout } from 'components/layout';

function MainRouter() {
  return (
    <>
      <Routes>
        {/* Logged in */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
