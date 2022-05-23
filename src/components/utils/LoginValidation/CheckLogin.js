import { getData } from './FetchData';

/**
 * 把輸入的登入資料與取得的帳戶資料做比對
 * @param {object} formData
 */
async function checkAccount(formData) {
  const account = await getData();

  console.log('account: ', account);

  const loginSuccess = await account.find(item => {
    return item.email === formData.email && item.password === formData.password;
  });

  if (loginSuccess) {
    console.log('login success');
    // TODO: 跳轉至 home 頁面
  } else {
    console.log('login fail');
    // TODO: 跳轉回登入頁面
  }
}

export { checkAccount };

// TODO:  login input data
// TODO: check token is exist, correct
