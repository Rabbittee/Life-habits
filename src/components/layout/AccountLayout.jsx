import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
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
