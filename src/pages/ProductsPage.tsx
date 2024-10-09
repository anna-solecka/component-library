import { useEffect, useState } from "react";
import LayoutComponent from "../components/LayoutComponent";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useBasket } from "../components/BasketContext";
import Basket from "../components/Basket";

interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  image: string;
  quantity: number;
  rrpPrice: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToBasket } = useBasket();
  const [quantity, setQuantity] = useState<number>(1);

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

  return (
    <LayoutComponent sidebar={<Basket />}>
      <div className="container">
        {products.map((product) => (
          <>
            <div key={product.id} className="product">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p>{product.shortDescription}</p>

              <div>
                {product.price}

                {product.rrpPrice > product.price && (
                  <>
                    {" "}
                    {" / "}
                    <span className="product__rrp">{product.rrpPrice}</span>
                    <p className="product__savings">
                      <p>
                        Savings:
                        {Number(
                          (
                            100 -
                            (product.price * 100) / product.rrpPrice
                          ).toFixed(2)
                        )}
                        %
                      </p>
                    </p>
                  </>
                )}
              </div>
              <div className="product__quantity">
                <div className="ds_select-wrapper  ds_input--fluid-one-third">
                  <select
                    className="ds_select"
                    id={`addQuantity-${product.id}`}
                    name="component"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span className="ds_select-arrow" aria-hidden="true"></span>
                </div>

                <Button
                  label="Add"
                  onClick={() => addToBasket(product, quantity)}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </LayoutComponent>
  );
};

export default ProductsPage;
