import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Stock = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    console.log("第二個參數是空陣列");
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getStocks() {
      let response = await axios.get("http://localhost:3001/api/stocks");
      setStocks(response.data);
    }
    getStocks();
  }, []);

  return (
    <>
      {stocks.map((stock) => {
        return (
          <div className="bg-white bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg m-6 cursor-pointer" key={stock.id}>
            <Link to={`/stock/${stock.id}`}>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{stock.id}</h2>
              <p className="text-gray-700">{stock.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Stock;
