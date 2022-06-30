import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <nav className="flex gap-4 items-center justify-center border-2 border-blue-500">
      <NavLink className="hover:bg-pink-300 p-2" to="/home">
        Home
      </NavLink>
      <NavLink className="hover:bg-pink-300 p-2" to="/diet">
        Diet
      </NavLink>
      <NavLink className="hover:bg-pink-300 p-2" to="/ring-fit">
        Ring-fit
      </NavLink>
      <NavLink className="hover:bg-pink-300 p-2" to="/account">
        Account
      </NavLink>
    </nav>
  );
}

export default MainNav;
