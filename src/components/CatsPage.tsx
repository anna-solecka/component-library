import CatsPagination from "./CatsPagination";
import LayoutComponent from "./LayoutComponent";

function Cats() {
  return (
    <LayoutComponent>
      <CatsPagination />
    </LayoutComponent>
  );
}

export default Cats;

{
  /* <h2>List of cats:</h2>
<ul className="ds_side-navigation__list">
  {cats.map((cat) => (
    <li className="ds_side-navigation__item" key={cat.id}>
      <Link className="ds_side-navigation__link" to={`/cats/${cat.id}`}>
        {cat.name}
      </Link>
    </li>
  ))}
</ul>
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
      render: (cat: any) => {
        return (
          <p>
            {[0, 1, 2, 3, 4].map((value) => (
              <span
                key={value}
                className={
                  value < cat.adaptability ? "dot active" : "dot"
                }
              ></span>
            ))}{" "}
          </p>
        );
      },
    },
    {
      label: "Child friendly",
      field: "child_friendly",
      render: (cat: any) => {
        return (
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
        );
      },
    },
  ]}
  data={cats}
/> */
}
