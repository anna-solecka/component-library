import LayoutComponent from "../components/LayoutComponent";
import { useState, useEffect, FC } from "react";
import {} from "../components/CardNavigation";
import { useParams } from "react-router-dom";

import InsetText from "./InsetText";

interface Testimonials {
  id: number;
  userId: number;
  content: string;
  rating: number;
}

const TestimonialsProfilePage: FC = () => {
  const { userid } = useParams<{ userid: string }>();

  const [testimonials, setTestimonials] = useState<Testimonials[]>();
  const [loadingTestimonials, setLoadingTestimonials] = useState<boolean>(true);
  const [errorTestimonials, setErrorTestimonials] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/" + `${userid}` + "/testimonials"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (errorTestimonials: unknown) {
        if (errorTestimonials instanceof Error) {
          setErrorTestimonials(errorTestimonials.message);
        } else {
          setErrorTestimonials("An unknown error occurred");
        }
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, [userid]);

  if (loadingTestimonials) {
    return <div>Loading...</div>;
  }

  if (errorTestimonials) {
    return <div>Error: {errorTestimonials}</div>;
  }
  console.log({ testimonials });
  return (
    <>
      <LayoutComponent>
        <div className="ds_wrapper">
          {testimonials && <h3>Testimonials</h3>}
          {testimonials &&
            testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <InsetText
                  content={
                    <>
                      {testimonial.content} <p>Rating: {testimonial.rating}</p>
                    </>
                  }
                />
              </div>
            ))}
        </div>
      </LayoutComponent>
    </>
  );
};

export default TestimonialsProfilePage;
