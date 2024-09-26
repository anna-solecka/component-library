import Accordion from "../components/Accordion";
import Button from "../components/Button";
import ConfirmationMessage from "../components/ConfirmationMessage";
import LayoutComponent from "../components/LayoutComponent";
import TabsContainer from "../components/Tabs/TabsContainer";

const AboutPage = () => {
  return (
    <LayoutComponent
      header={
        <ConfirmationMessage
          title="Landlord added successfully"
          body={
            <p>
              You have added the landlord <strong>John Smith </strong> to the
              application.
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
  );
};

export default AboutPage;
