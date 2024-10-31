import { useEffect, useState } from "react";
import axios from "axios";
import { Cat } from "./CatItem";
import { Link } from "react-router-dom";

import LayoutComponent from "./LayoutComponent";

function Cats() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    axios
      .get<Cat[]>("http://localhost:3000/api/cats")
      .then((res) => setCats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <LayoutComponent>
      <h2>List of cats:</h2>
      <ul className="ds_side-navigation__list">
        {cats.map((cat) => (
          <li className="ds_side-navigation__item" key={cat.id}>
            <Link className="ds_side-navigation__link" to={`/cats/${cat.id}`}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </LayoutComponent>
  );
}

export default Cats;
