import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>Life Habits Home Page</h2>
      <nav>
        <Link to="/diet">Diet</Link>
        <Link to="/ring-fit">RingFit</Link>
      </nav>
    </>
  );
}

export default Home;
