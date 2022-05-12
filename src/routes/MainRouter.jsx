import { Routes, Route } from 'react-router-dom';
import { Login, Home, Diet, RingFit } from 'pages';

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="diet" element={<Diet />} />
        <Route path="ring-fit" element={<RingFit />} />
      </Routes>
    </>
  );
}

export default MainRouter;
