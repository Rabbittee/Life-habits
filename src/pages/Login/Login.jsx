import { Link } from 'react-router-dom';
import { checkAccount } from 'components/utils/CheckLogin';

function Login() {
  checkAccount('test data');

  return (
    <section>
      <h1>登入</h1>
      <form action="submit">
        <label>
          <p>信箱</p>
          <input type="email" />
        </label>

        <label>
          <p>密碼</p>
          <input type="password" />
        </label>

        <label>
          <input type="button" value="登入" />
        </label>
      </form>
      <p>還沒有帳號嗎？</p>
      <Link to="/account/sign-up">註冊</Link>
    </section>
  );
}
export default Login;
