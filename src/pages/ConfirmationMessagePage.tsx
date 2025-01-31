import ConfirmationMessage from "../components/ConfirmationMessage";
import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const CardNavigationPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h1>Confirmation Message</h1>}
      <ConfirmationMessage
        title={"Landlord added successfully"}
        body={"You have added the landlord John Smith to the application."}
      />
    </LayoutComponent>
  );
};

export default CardNavigationPage;
