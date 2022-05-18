import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <section>
      <h1>註冊</h1>
      <form action="submit">
        <label>
          <p>暱稱</p>
          <input type="text" />
        </label>

        <label>
          <p>信箱</p>
          <input type="email" />
        </label>

        <label>
          <p>設定密碼</p>
          <input type="password" />
        </label>

        <label>
          <p>再輸入一次密碼</p>
          <input type="password" />
        </label>

        <label>
          <input type="button" value="註冊" />
        </label>
      </form>
      <p>已經有帳號了嗎？</p>
      <Link to="/account/login">登入</Link>
    </section>
  );
}
export default SignUp;
