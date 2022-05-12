import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <title>Account Settings</title>
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
