// axios await 版本
// 把 query string 抽出來當變數，用 params 的方式去設定

// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require("axios");
const fs = require("fs");
// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

let file = new Promise((resolve, reject) => {
  // error-first callback
  fs.readFile("stock.txt", "utf-8", (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
});

(async () => {
  try {
    let stockNo = await file;
    let today = new Date()
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let day = today.getDay().toString();
    let date = year + month + day
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });

    console.log("await", response.data);
  } catch (e) {
    console.error(e);
  }
})();
