import { Outlet, useLocation } from 'react-router-dom';
import { Header, AccountNav, MainNav } from './components';

function Layout() {
  const location = useLocation();

  return (
    <>
      <Header pathName={location.pathname} />

      <MainNav />

      <AccountNav />
      <main>
        <p>Welcome to Life Habits</p>
        <Outlet />
      </main>
      <footer>
        <p>Account settings footer</p>
      </footer>
    </>
  );
}
export default Layout;
