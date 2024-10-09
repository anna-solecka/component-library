import { Link } from "react-router-dom";

import LayoutComponent from "../components/LayoutComponent";

import ToDo from "../components/ToDo/ToDo";

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
    <LayoutComponent>
      <ToDo />
    </LayoutComponent>
  );
};

export default ComponentsPage;
