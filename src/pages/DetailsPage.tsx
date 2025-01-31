import Details from "../components/Details";
import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const DetailsPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h2>Details</h2>}
      <Details
        summary={"I cannot sign in"}
        text={
          <p>
            Contact the design system team if you cannot sign in. <br />
            Or phone 0000 123 4567
            <br />
            Monday to Friday, 9am to 5pm
          </p>
        }
      />
    </LayoutComponent>
  );
};

export default DetailsPage;
