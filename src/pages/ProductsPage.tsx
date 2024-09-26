import { useEffect, useState } from "react";
import LayoutComponent from "../components/LayoutComponent";
import Button from "../components/Button";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  image: string;
  quantity: number;
}

interface BasketProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [basketProduct, setBasketProduct] = useState<BasketProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const onAddToBasket = (newProduct: BasketProps) => {
    const exist = basketProduct.find((x) => x.id === newProduct.id);
    if (exist) {
      setBasketProduct(
        basketProduct.map((x) =>
          x.id === newProduct.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : x
        )
      );
    } else {
      setBasketProduct([...basketProduct, { ...newProduct, quantity: 1 }]);
    }
  };

  return (
    <>
      <LayoutComponent
        sidebar={
          <div className="ds_wrapper">
            <h1>Basket</h1>
            {basketProduct.length > 0 ? (
              basketProduct.map((basketProduct) => (
                <div key={basketProduct.id}>
                  <p>Product: {basketProduct.name}</p>
                  <p>Price: {basketProduct.price}</p>
                  <p>Quantity: {basketProduct.quantity}</p>
                </div>
              ))
            ) : (
              <p>Your basket is empty</p>
            )}
          </div>
        }
      >
        <div className="ds_wrapper">
          <ul>
            {products.map((product) => (
              <>
                <li key={product.id}>
                  <h2>{product.name}</h2>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                  {
                    <div>
                      <p>{product.price}</p>
                      {product.shortDescription}{" "}
                    </div>
                  }
                  <Button
                    label="Add to basket"
                    isLink={true}
                    onClick={() => onAddToBasket(product)}
                  />{" "}
                </li>
              </>
            ))}
          </ul>
        </div>
      </LayoutComponent>
    </>
  );
};

export default ProductsPage;
