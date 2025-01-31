import LayoutComponent from "../components/LayoutComponent";

import TabsContainer from "../components/Tabs/TabsContainer";
import { SidebarLinks } from "./ComponentsPage";

const TabsPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h2>Tabs</h2>}
      <TabsContainer />{" "}
    </LayoutComponent>
  );
};

export default TabsPage;
