import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/diet">飲食紀錄</Link>
        </li>
        <li>
          <Link to="/ring-fit">健身環</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
