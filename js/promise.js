let doWorkPromise = function (job, timer) {
  // 1. 物件 -> new
  return new Promise((resolve, reject) => {
    // 2. 執行非同步工作
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
  });
};

let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
let brushPromise = doWorkPromise('刷牙', 3000);
brushPromise
  .then((data) => {
    console.log(data);
    return doWorkPromise('吃早餐', 5000);
  })
  .then((data) => {
    console.log(data);
    return doWorkPromise('寫功課', 3000);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('發生錯誤', err);
  })
  .finally(() => {
    console.log('已完成所有任務')
  });