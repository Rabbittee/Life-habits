import { Routes, Route } from 'react-router-dom';
import { Login, Home, Diet, RingFit } from 'pages';
import { Layout } from 'components/layout';

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="diet" element={<Diet />} />
          <Route path="ring-fit" element={<RingFit />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRouter;
