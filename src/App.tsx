import "./App.css";
import Accordion from "./components/Accordion";
import Button from "./components/Button";

import ConfirmationMessage from "./components/ConfirmationMessage";
import DesignSystem from "./components/DesignSystem";
import LayoutComponent from "./components/LayoutComponent";
//import Details from "./components/Details";
//import NotificationPanel from "./components/NotificationPanel";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import TabsContainer from "./components/Tabs/TabsContainer";

function App() {
  return (
    <>
      <DesignSystem
        header={
          <SiteHeader
            title="Design System"
            navItems={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about", isCurrent: true },
              { label: "Components", href: "/components" },
            ]}
          />
        }
        footer={
          <SiteFooter
            navItems={[
              { label: "Privacy", href: "#" },
              { label: "Cookies", href: "#", isCurrent: true },
              { label: "Accessibility", href: "#" },
            ]}
          />
        }
      >
        <LayoutComponent
          header={
            <ConfirmationMessage
              title="Landlord added successfully"
              body={
                <p>
                  You have added the landlord <strong>John Smith </strong> to
                  the application.
                </p>
              }
            />
          }
          partner={<Button label="Add Landlord" />}
          feedback={<Accordion />}
          sidebar={<Button label="Add Landlord" />}
        >
          <TabsContainer />
        </LayoutComponent>
      </DesignSystem>
    </>
  );
}

export default App;
