// install mysql2

const mysql2 = require('mysql2/promise');

(async () => {
  const connection = await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'stock_mfee31',
  });

  // simple query
  let [stock] = await connection.query('SELECT * FROM `stocks`');
  // console.log(result);
  console.log(stock);

  connection.end();
})();