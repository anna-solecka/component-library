import LayoutComponent from "../components/LayoutComponent";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  return (
    <LayoutComponent>
      <h2>Testimonials</h2>
      <p>
        <Link to={"/users/testimonials/1"}>Alice</Link>
      </p>
      <p>
        <Link to={"/users/testimonials/2"}>Bob</Link>
      </p>
      <p>
        <Link to={"/users/testimonials/3"}>Charlie</Link>
      </p>
      <p>
        <Link to={"/users/testimonials/4"}>David</Link>
      </p>
    </LayoutComponent>
  );
};

export default TestimonialsPage;
