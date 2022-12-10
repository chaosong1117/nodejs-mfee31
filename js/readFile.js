const fs = require('fs')
const { resolve } = require('path')

let file = new Promise((resolve, reject) => {
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) reject(err)
    resolve(data)
  })
})

file.then((data) => {
  console.log('這裡是 then', data, file)
}).catch((error) => {
  console.error('這裡是error', error, file)
})
