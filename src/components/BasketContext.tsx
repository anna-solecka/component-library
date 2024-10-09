import React, { createContext, useState, useContext, ReactNode } from "react";

interface Product {
  rrpPrice: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
  shortDescription: string;
}

interface BasketContextProps {
  basket: Product[];
  addToBasket: (product: Product, addQuantity: number) => void;
  removeFromBasket: (product: number) => void;
  removeInBasket: (product: number) => void;
  addInBasket: (product: number) => void;
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Product[]>([]);

  const addToBasket = (product: Product, addQuantity: number = 1) => {
    const exist = basket.find((x) => x.id === product.id);
    console.log("in add to basket", product, addQuantity, exist);

    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === product.id
            ? { ...exist, quantity: exist.quantity + addQuantity }
            : x
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: addQuantity }]);
    }
  };

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.id !== productId)
    );
  };
  const removeInBasket = (productId: number) => {
    const exist = basket.find((x) => x.id === productId);
    if (exist?.quantity === 1) {
      setBasket(basket.filter((x) => x.id !== productId));
    } else {
      setBasket(
        basket.map((x) =>
          x.id === productId && exist
            ? { ...x, quantity: exist.quantity - 1 }
            : x
        )
      );
    }
  };
  const addInBasket = (productId: number) => {
    const exist = basket.find((x) => x.id === productId);

    setBasket(
      basket.map((x) =>
        x.id === productId && exist ? { ...x, quantity: exist.quantity + 1 } : x
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        removeInBasket,
        addInBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
