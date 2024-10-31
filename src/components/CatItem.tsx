import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cats.scss";
import LayoutComponent from "./LayoutComponent";
import Cats from "./CatsPage";

export interface Cat {
  id: string;
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  description: string;
  adaptability: number;
  child_friendly: number;
  energy_level: number;
  intelligence: number;
  grooming: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

const CatItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cat, setCat] = useState<Cat>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cats");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundCat = data.find((cat: Cat) => cat.id === id);
        console.log(data, foundCat, id);
        setCat(foundCat);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <LayoutComponent sidebar={<Cats />}>
      {cat && (
        <div className="cat_container">
          <h1 className="cat_header">{cat.name}</h1>
          <div className="cat_info">
            <div className="cat_characteristics">
              <h3 className="cat_h3">Adaptability:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.adaptability ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Energy level:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.energy_level ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Intelligence:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.intelligence ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Social needs:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.social_needs ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Stranger friendly:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={
                      value < cat.stranger_friendly ? "dot active" : "dot"
                    }
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Health issues:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.health_issues ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Grooming:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={value < cat.grooming ? "dot active" : "dot"}
                  ></span>
                ))}{" "}
              </p>
            </div>
            <div className="cat_characteristics">
              <h3 className="cat_h3">Child friendly:</h3>
              <p>
                {[0, 1, 2, 3, 4].map((value) => (
                  <span
                    key={value}
                    className={
                      value < cat.child_friendly ? "dot active" : "dot"
                    }
                  ></span>
                ))}
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="cat_h3">Description</h3>
              <p> {cat.description}</p>
            </div>
            <div>
              <h3 className="cat_h3">Weight</h3>
              <p>
                {cat.weight.imperial}lb / {cat.weight.metric}kg
              </p>
            </div>
          </div>
        </div>
      )}
    </LayoutComponent>
  );
};

export default CatItem;
