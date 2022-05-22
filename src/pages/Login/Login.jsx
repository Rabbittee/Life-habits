import { Link } from 'react-router-dom';
import { checkAccount } from 'components/utils/CheckLogin';
import { useState } from 'react';

function Login() {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log('formData: ', formData);
    checkAccount(formData);
  }

  return (
    <section className="flex flex-col gap-2 items-center">
      <h1>登入</h1>
      <form action="submit" onSubmit={handleLogin} className="flex flex-col">
        <label className="bg-blue-400 p-4">
          <p>信箱</p>
          <input
            className="border border-pink-300"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>

        <label className="bg-blue-300 p-4">
          <p>account</p>
          <input
            className="border border-pink-300"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="px-2 py-1 border border-green-700 bg-green-200"
            type="button"
            value="登入"
            onClick={handleLogin}
          />
        </label>
      </form>
      <div>
        <p>還沒有帳號嗎？</p>
        <Link to="/account/sign-up">註冊</Link>
      </div>
    </section>
  );
}
export default Login;
