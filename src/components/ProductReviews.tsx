import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Reviews {
  id: number;
  user: string;
  review: string;
  score: number;
  productId: number;
}

const ProductReviews = () => {
  const { productid } = useParams<{ productid: string }>();
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getReviews = async () => {
      console.log("Getting reviews");
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${productid}/reviews`
        );
        if (!response.ok) {
          throw new Error("No rewiews found");
        }
        const data = await response.json();
        setReviews(data);
        return data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        return [];
      }
    };
    getReviews();
  }, [productid]);

  return (
    <div>
      {error && <p>{error}</p>}
      {reviews &&
        reviews.map((review: { id: number; review: string; score: number }) => (
          <div key={review.id}>
            <p>Review: {review.review}</p>
            <p>Score: {review.score}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductReviews;
