import Button from "../components/Button";
import LayoutComponent from "../components/LayoutComponent";
import { SidebarLinks } from "./ComponentsPage";

const ButtonPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      {<h2>Button</h2>}
      <Button label="Button" />
      <Button label="Cancel" style="cancel" />{" "}
      <Button label="Secondary" style="secondary" />{" "}
      <Button label="isDisabled" isDisabled={true} />{" "}
      <Button label="isSmall" isSmall={true} />{" "}
      <Button label="Fixed" width="fixed" /> <Button label="Max" width="max" />{" "}
    </LayoutComponent>
  );
};

export default ButtonPage;
