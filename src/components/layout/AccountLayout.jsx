import { Outlet } from 'react-router-dom';
import { AccountNav, MainNav } from './components';

function Layout() {
  return (
    <>
      <MainNav />

      <AccountNav />

      <header>
        <h1>Account Settings</h1>
      </header>
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
