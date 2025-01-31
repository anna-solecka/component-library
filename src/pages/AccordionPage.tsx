import Accordion2 from "../components/Accordion2";
import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const AccordionPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h2>Accordion</h2>}
      <Accordion2
        items={[
          {
            title: "First Item",
            content: "Accordion Item",
            checked: false,
          },
          {
            title: "Second Item",
            content: "Accordion Item",
            checked: false,
          },
          {
            title: "Third Item",
            content: "Accordion Item",
            checked: false,
          },
        ]}
      />
    </LayoutComponent>
  );
};

export default AccordionPage;
