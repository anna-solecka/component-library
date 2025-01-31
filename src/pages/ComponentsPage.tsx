import { Link } from "react-router-dom";
import LayoutComponent from "../components/LayoutComponent";

export const SidebarLinks = () => {
  return (
    <div>
      <div>
        <Link to={"/components/accordion"}>Accordion</Link>
      </div>
      <div>
        <Link to={"/components/button"}>Button</Link>
      </div>
      <div>
        <Link to={"/components/cardnavigation"}>Card Navigation</Link>
      </div>
      <div>
        <Link to={"/components/confirmationmessage"}>Confirmation Message</Link>
      </div>
      <div>
        <Link to={"/components/details"}>Details</Link>
      </div>
      <div>
        <Link to={"/components/tabs"}>Tabs</Link>
      </div>
    </div>
  );
};

const ComponentsPage = () => {
  return (
    <LayoutComponent sidebar={<SidebarLinks />}>
      Design System Components
    </LayoutComponent>
  );
};

export default ComponentsPage;
/*
<AccordinonContainer>
  <AccorditonItem title="Item 1">
    <div>Item one content</div>
  </AccorditonItem>
  <AccorditonItem title="Item 2">
    <div><h1>Item two content</h1></div>
  </AccorditonItem>
  <AccorditonItem title="Item 3">
    <h1>Item three content</h1>
  </AccorditonItem>
</AccordinonContainer>
*/

{
  /* <Tabss
        items={[
          {
            id: "past-day",
            title: "Past day",
            content: (
              <div>
                <h1>Armin Test</h1>
                <p>Content day here</p>
              </div>
            ),
          },
          {
            id: "past-week",
            title: "Past week",
            content: (
              <div>
                <h2>Info</h2>
                <p>Past week here</p>
              </div>
            ),
          },
          {
            id: "past-month",
            title: "Past month",
            content: (
              <div>
                <h2>Info</h2>
                <p>Past month here</p>
              </div>
            ),
          },
        ]}
      /> */
}
