import { NavLink } from 'react-router-dom';

function AccountNav() {
  return (
    <nav className="flex gap-4 items-center justify-center bg-blue-300">
      <NavLink className="hover:bg-pink-300 p-2" to="/account/login">
        Login
      </NavLink>
      <NavLink className="hover:bg-pink-300 p-2" to="/account/sign-up">
        Sign-up
      </NavLink>
    </nav>
  );
}

export default AccountNav;
