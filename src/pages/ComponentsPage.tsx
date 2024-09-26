import { Link } from "react-router-dom";

import LayoutComponent from "../components/LayoutComponent";

export const SidebarLinks = () => {
  return (
    <div>
      <div>
        <Link to={"/components/accordion"}>Accordion</Link>
      </div>
      <div>
        <Link to={"/components/button"}>Button</Link>
      </div>
      <div>
        <Link to={"/components/tabs"}>Tabs</Link>
      </div>
      <div>
        <Link to={"/components/cardnavigation"}>Card Navigation</Link>
      </div>
    </div>
  );
};

const ComponentsPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      Welcom to compoentns
    </LayoutComponent>
  );
};

export default ComponentsPage;
