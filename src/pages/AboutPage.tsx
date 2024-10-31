import ContactForm from "../components/ContactForm";
import LayoutComponent from "../components/LayoutComponent";

const AboutPage = () => {
  return (
    <LayoutComponent
      header={<ContactForm />}
      children={undefined}
    ></LayoutComponent>
  );
};

export default AboutPage;
//
