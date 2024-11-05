import ContactFormFormik from "../components/ContactFormFormik";
import DsPageHeader from "../components/DsPageHeader";
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
      <ContactFormFormik />
    </LayoutComponent>
  );
};

export default AboutPage;
//
