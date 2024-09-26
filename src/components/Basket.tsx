import { FC, useState } from "react";
import LayoutComponent from "./LayoutComponent";

interface BasketProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Basket: FC<BasketProps> = () => {
  return (
    <LayoutComponent>
      <div className="ds_wrapper">
        <h1>Basket</h1>
        {product.length > 0 ? (
          product.map((product) => (
            <div key={product.id}>
              <p>Product: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your basket is empty</p>
        )}
      </div>
    </LayoutComponent>
  );
};

export default Basket;
