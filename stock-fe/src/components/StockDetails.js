import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StockDetails = () => {
  const [error, setError] = useState(null);
  const { stockId } = useParams();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getStocks() {
      let response = await axios.get(`http://localhost:3001/api/stocks/${stockId}`);
      setStocks(response.data);
    }
    getStocks();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <ul>
        <li
          style={{
            display: "inline-block",
            margin: "2px",
            // backgroundColor: page === i ? '#00d1b2' : '',
            // borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            // color: page === i ? '#fff' : '#363636',
            borderWidth: "1px",
            width: "28px",
            height: "28px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          1
        </li>
      </ul>
      目前在第 1 頁
      {stocks.map((stock) => {
        return (
          <div className="bg-white bg-gray-50 p-6 rounded-lg shadow m-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          日期: {stock.date}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          成交金額: {stock.amount}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          成交股數: {stock.volumn}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          開盤價：{stock.open_price}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          收盤價：{stock.close_price}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          漲跌價差：{stock.delta_price}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          最高價：{stock.high_price}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          最低價：{stock.low_price}
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          成交筆數：{stock.transactions}
        </h2>
      </div>
        )
      })}
      
    </div>
  );
};

export default StockDetails;
