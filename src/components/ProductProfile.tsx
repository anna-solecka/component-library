import { Link, useParams } from "react-router-dom";
import LayoutComponent from "./LayoutComponent";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProductReviews from "./ProductReviews";
import { useBasket } from "./BasketContext";
import Product from "./Product/Product";
import Basket from "./Basket";

export interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: string;
  quantity: number;
  rrpPrice: number;
}

const ProductProfile: React.FC = () => {
  const { productid } = useParams<{ productid: string }>();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const { basket, addToBasket } = useBasket();

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

  return (
    <LayoutComponent sidebar={<Basket />}>
      <Product />
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
          <label className="ds_label">Quatity</label>
          <input
            min="0"
            max="20"
            className="ds_input  ds_input--fixed-10"
            type="number"
            id={`addQuantity-${product.id}`}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button
            label="Add to basket"
            isLink={true}
            onClick={() => addToBasket(product, quantity)}
          />
          {basket && basket.length > 0 && (
            <div>Basket has {basket.length} items</div>
          )}
        </div>
      )}
    </LayoutComponent>
  );
};

export default ProductProfile;
