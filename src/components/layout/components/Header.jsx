function Header(props) {
  return (
    <header>
      <h1>Header Component is here</h1>
      <h2>here is {props.pathName || 'pathName'}</h2>
    </header>
  );
}

export default Header;
