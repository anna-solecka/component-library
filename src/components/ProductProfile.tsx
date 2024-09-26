import { Link, useParams } from "react-router-dom";
import LayoutComponent from "./LayoutComponent";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProductReviews from "./ProductReviews";

export interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: string;
  quantity: number;
}

interface BasketProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductProfile: React.FC = () => {
  const { productid } = useParams<{ productid: string }>();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [basketProduct, setBasketProduct] = useState<BasketProps[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${productid}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productid]);

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
    <LayoutComponent>
      {product && (
        <div className="ds_wrapper">
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>
          <p>{product.shortDescription}</p>
          <p>{product.longDescription}</p>
          <p>{product.category}</p>
          <Button
            label="Reviews"
            isLink={true}
            onClick={() => setIsClicked(!isClicked)}
          />
          {isClicked && <ProductReviews />}
          <Link to="/products">
            <Button label="Back to products" isLink={true} />
          </Link>
          <Button
            label="Add to basket"
            isLink={true}
            onClick={() => onAddToBasket(product)}
          />
          {basketProduct && basketProduct.length > 0 && (
            <div>Basket has {basketProduct.length} items</div>
          )}
        </div>
      )}
    </LayoutComponent>
  );
};

export default ProductProfile;
