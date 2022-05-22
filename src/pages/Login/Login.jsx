import { Link } from 'react-router-dom';
import { checkAccount } from 'components/utils/CheckLogin';
import { useState } from 'react';

function Login() {
  checkAccount('test data');

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
  }

  return (
    <section>
      <h1>登入</h1>
      <form action="submit" onSubmit={handleLogin}>
        <label>
          <p>信箱</p>
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label>
          <p>密碼</p>
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <label>
          <input type="button" value="登入" onClick={handleLogin} />
        </label>
      </form>
      <p>還沒有帳號嗎？</p>
      <Link to="/account/sign-up">註冊</Link>
    </section>
  );
}
export default Login;
