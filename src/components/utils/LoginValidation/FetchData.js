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

export { getData };
