import React, { createContext, useState, useContext, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  shortDescription: string;
}

interface BasketContextProps {
  basket: Product[];
  addToBasket: (product: Product) => void;
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

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
