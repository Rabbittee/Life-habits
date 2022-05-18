import { Header, Footer, MainNav } from './components';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
