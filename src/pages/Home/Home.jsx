function Home({ onLogin }) {
  return (
    <section className="px-5">
      <h2 className="text-center text-2xl">Life Habits Home Page</h2>

      <button
        type="button"
        onClick={onLogin}
        className="p-3 bg-gray-700 text-gray-100 hover:bg-gray-200 hover:text-gray-600"
      >
        LoginButton
      </button>
    </section>
  );
}

export default Home;
