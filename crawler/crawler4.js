const fs = require('fs/promises');
const axios = require("axios");

(async () => {
    try {
      let data = await fs.readFile('stock.txt', 'utf-8');
      let stockNo = data;
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
