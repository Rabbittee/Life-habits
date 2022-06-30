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

  return loginSuccess;
}

export { checkAccount };
