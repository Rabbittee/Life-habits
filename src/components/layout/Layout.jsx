import { Header, Footer, MainNav } from './components';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <>
      <Header pathName={location.pathname} />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
