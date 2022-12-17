const fs = require('fs/promises');
const axios = require("axios");
const moment = require("moment");

(async () => {
    try {
      let data = await fs.readFile('stock.txt', 'utf-8');
      let stockNo = data;
      let date = moment().format("YYYYMMDD");
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
