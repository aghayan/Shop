import "../assets/styles/shop_style.scss";
import React, { useEffect, useState } from 'react';

export function OnlineShop({ storeList }) {
  const [count, setCount] = useState(
    storeList.reduce((acc, val) => {
      acc[val.id] = {
        count: 1,
        price: val.price,
      };
      return acc;
    }, {})
  );

  function countPlus(item) {
    if (count[item.id].count < item.limit) {
      setCount(prevItems => ({
        ...prevItems,
        [item.id]: {
          ...prevItems[item.id],
          count: prevItems[item.id].count + 1,
          price: prevItems[item.id].price + prevItems[item.id].price / prevItems[item.id].count,
        },
      }));
    }
  }

  function countMinus(item) {
    if (count[item.id].count > 1) {
      setCount(prevItems => ({
        ...prevItems,
        [item.id]: {
          ...prevItems[item.id],
          count: prevItems[item.id].count - 1,
          price: prevItems[item.id].price - prevItems[item.id].price / prevItems[item.id].count,
        },
      }));
    }
  }

  useEffect(() => {
    // You can add additional logic here if needed, based on the 'count' state.
  }, [count]);

  return (
    <div>
      <div className="product_div">
        {storeList.map((data, i) => (
          <div className="border" key={data.id}>
            <div className="product">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <h5>Count {data.limit}</h5>
            <h4>Price {data.price}</h4>
            <div>
              <div className="number">
                <h3>{count[data.id].count}</h3>
              </div>
              <div className="count">
                <button onClick={() => { countMinus(data) }}>-</button>
                <button onClick={() => { countPlus(data) }}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
