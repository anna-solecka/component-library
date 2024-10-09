import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const AccordionPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>Accordion</LayoutComponent>
  );
};

export default AccordionPage;
