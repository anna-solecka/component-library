import React from "react";
import { SidebarLinks } from "./ComponentsPage";
import LayoutComponent from "../components/LayoutComponent";

const AccordionPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>Accordion</LayoutComponent>
  );
};

export default AccordionPage;
