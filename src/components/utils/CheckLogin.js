import * as accountData from 'data/account.json';

/**
 * 取得帳號資料
 * @param {JSON object} data
 * @returns
 */
function getData() {
  const data = accountData;
  return data.account;
}

/**
 * 把輸入的登入資料與取得的帳戶資料做比對
 * @param {object} formData
 */
function checkAccount(formData) {
  const account = getData();
  console.log('account: ', account);

  account.forEach(item => {
    if (item.email === formData.email && item.password === formData.password) {
      console.log('login success');
    }
    console.log('login fail');
  });
}

/**
 * 對 token 做檢查來確認登入狀態
 *  - 如果 token 沒有值，則跳轉到登入頁面
 *  - 如果 token 有值，則繼續執行
 */
function checkToken() {
  console.log('loginState');
}

export { checkAccount, checkToken };

// TODO:  login input data
// TODO: check token is exist, correct
