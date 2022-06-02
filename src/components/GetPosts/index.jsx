import React, { useContext } from "react";
import useBasket from "../../hooks/useBasket";
import { AppContext } from "../../pages/mainpage";

const UseApi = () => {
  const { loading, error, items, reload } = useContext(AppContext);
  const { addItem, value, clear, removeItem, increment, decrement } =
    useBasket();

  const toBasket = (post) => {
    addItem(post);
  };

  const handleDecrement = (id, count) => {
    if (count > 1) {
      decrement(id);
    } else {
      removeItem(id);
    }
  };

  return (
    <div className="container">
      <button onClick={(a) => reload(a)}>download posts</button>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div className="wrap container">
        <div className="left">
          {items &&
            items.map((data) => (
              <p onClick={() => toBasket(data)} key={data.id}>
                {data.title}
              </p>
            ))}
        </div>
        <div className="right">
          <div className="cartTop">
            <h2>cart</h2>
            <button onClick={() => clear()}>clear</button>
          </div>
          <div className="cart">
            {value?.map((item) => {
              const { id, count } = item;
              return (
                <div className="item" key={item.id}>
                  <p>{item.newItem.title}</p>
                  <div className="counter">
                    <button onClick={() => handleDecrement(id, count)}>
                      -
                    </button>
                    <span>{count}</span>
                    <button onClick={() => increment(id)}>+</button>
                    <button onClick={() => removeItem(id)}>delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* {items?.length > 0 && <button onClick={(e) => add()}>more</button>} */}
    </div>
  );
};

export default UseApi;
