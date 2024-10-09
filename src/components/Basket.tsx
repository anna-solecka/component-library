import { FC } from "react";
import { useBasket } from "./BasketContext";
import Button from "./Button";
import "./basket.scss";

const Basket: FC = () => {
  const { basket, removeFromBasket, addInBasket, removeInBasket } = useBasket();
  const total = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const savings = basket.reduce((acc, item) => {
    if (item.rrpPrice > item.price) {
      return acc + (item.rrpPrice - item.price) * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <div className="container__basket">
      <div className="heading__basket">
        <h2>Basket</h2>
        <h3>Total {total.toFixed(2)} </h3>
        <h4 className="savings">Total savings: {savings.toFixed(2)}</h4>
      </div>
      {basket.length > 0 ? (
        basket.map((item) => (
          <div key={item.id} className="product__basket">
            <p>Product: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="buttons">
              <Button
                onClick={() => removeFromBasket(item.id)}
                label="Remove"
              ></Button>

              <Button onClick={() => addInBasket(item.id)} label="+"></Button>
              <Button
                onClick={() => removeInBasket(item.id)}
                label="-"
              ></Button>
            </div>
          </div>
        ))
      ) : (
        <p className="heading__basket">Your basket is empty</p>
      )}
    </div>
  );
};

export default Basket;
