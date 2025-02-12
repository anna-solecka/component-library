import { CardNavigationItem } from "../components/CardNavigation";
import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const CardNavigationPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h2>Card Navigation</h2>}
      <CardNavigationItem
        title="Card Navigation title"
        href="#"
        summary="Summary"
      />
    </LayoutComponent>
  );
};

export default CardNavigationPage;
