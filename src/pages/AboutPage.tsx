import ContactFormFormik from "../components/ContactFormFormik";
import DsNotificationPanel from "../components/DsNotificationPanel";
import DsPageHeader from "../components/DsPageHeader";
import DsTable from "../components/DsTable";
import LayoutComponent from "../components/LayoutComponent";

const AboutPage = () => {
  return (
    <LayoutComponent
      header={
        <DsPageHeader
          title="Contact form"
          label="Form in formik"
          metadataKey="Last updated"
          metadataValue="10.12.2002"
        />
      }
    >
      <DsNotificationPanel title="Thank you for visiting">
        "This is a contact form page"
      </DsNotificationPanel>
      <ContactFormFormik />
    </LayoutComponent>
  );
};

export default AboutPage;
//
