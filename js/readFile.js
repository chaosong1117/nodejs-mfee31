const fs = require('fs')

let file = new Promise((resolve, reject) => {
  fs.readFile('test1.txt', 'utf-8', (err, data) => {
    if(err) return reject(err)
    resolve(data)
  })
})

file.then((data) => {
  console.log('讀檔內容為', data, file)
}).catch((error) => {
  console.error('錯誤訊息是', error, file)
})
