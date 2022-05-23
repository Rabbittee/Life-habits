/**
 * 建立 token
 */
function createToken() {
  console.log('create token');
  //   localStorage.setItem('token', '123456789');
}

/**
 * 對 token 做檢查來確認登入狀態
 *  - 如果 token 沒有值，則跳轉到登入頁面
 *  - 如果 token 有值，則繼續執行
 */
function checkToken() {
  //   console.log('token exist or not: ', localStorage.getItem('token'));
  console.log('token not exist');
}

export { createToken, checkToken };
