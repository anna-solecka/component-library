import { useEffect, useState } from "react";
import axios from "axios";
import { Cat } from "./CatItem";
import { Link } from "react-router-dom";

import LayoutComponent from "./LayoutComponent";
import DsTableGrid from "./DsTableGrid";

const getCatDots = (field: string) => (cat: any) => {
  return (
    <p>
      {[0, 1, 2, 3, 4].map((value) => (
        <span
          key={value}
          className={value < cat[field] ? "dot active" : "dot"}
        ></span>
      ))}{" "}
    </p>
  );
};

const getAdabtiblityDots = getCatDots("adaptability");
const getChildFriendlyDots = getCatDots("child_friendly");

interface CatPagedResponse {
  data: Cat[];
  numberOfPages: number;
  total: number;
}

function CatsPagination() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalCats, setTotalCats] = useState<number>(0);

  useEffect(() => {
    axios
      .get<CatPagedResponse>(
        `http://localhost:3000/api/cats-paged?page=${currentPage}`
      )
      .then((res) => {
        setCats(res.data.data);
        setTotalPages(res.data.numberOfPages);
        setTotalCats(res.data.total);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  console.log({ cats });

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <LayoutComponent>
        <h2>List of cats:</h2>
        <nav className="ds_pagination" aria-label="Search result pages">
          {" "}
          <ul className="ds_pagination__list">
            {currentPage > 1 && (
              <li className="ds_pagination__item">
                <a
                  aria-label="Previous page"
                  className="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <svg className="ds_icon" aria-hidden="true" role="img">
                    <use href="/assets/images/icons/icons.stack.svg#chevron_left"></use>
                  </svg>
                  <span className="ds_pagination__link-label">Previous</span>
                </a>
              </li>
            )}

            {pages.map((value) => (
              <li key={value} className="ds_pagination__item ">
                <a
                  aria-label={`Page ${value}`}
                  className={`ds_pagination__link ${
                    currentPage === value ? "ds_current" : ""
                  }`}
                  onClick={() => setCurrentPage(value)}
                >
                  <span className="ds_pagination__link-label">{value}</span>
                </a>
              </li>
            ))}
            {currentPage < totalPages && (
              <li className="ds_pagination__item">
                <a
                  aria-label="Next page"
                  className="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <span className="ds_pagination__link-label">Next</span>
                  <svg className="ds_icon" aria-hidden="true" role="img">
                    <use href="/assets/images/icons/icons.stack.svg#chevron_right"></use>
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </nav>
        <h3>
          Page {currentPage} of {totalPages} (total {totalCats} cats)
        </h3>
        <DsTableGrid
          columns={[
            {
              label: "Name",
              field: "name",
            },
            {
              label: "Weight Imperial",
              field: "weight.imperial",
              render: (cat: any) => {
                return <div>{cat.weight.imperial} lbs</div>;
              },
            },
            {
              label: "Weight Metric",
              field: "weight.metric",
              render: (cat: any) => {
                return <div>{cat.weight.metric} kg</div>;
              },
            },

            {
              label: "Description",
              field: "description",
            },
            {
              label: "Adaptability",
              field: "adaptability",
              render: getAdabtiblityDots,
            },
            {
              label: "Child friendly",
              field: "child_friendly",
              render: getChildFriendlyDots,
            },
          ]}
          data={cats}
        />
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
    </>
  );
}

export default CatsPagination;
/*  */
