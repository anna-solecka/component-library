import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./components/index.scss";
import DesignSystem from "./components/DesignSystem";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ComponentsPage from "./pages/ComponentsPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import TabsPage from "./pages/TabsPage";
import UsersPage from "./pages/UsersPage";
import CardNavigationPage from "./pages/CardNavigationPage";
import UserProfilePage from "./components/UserProfile";
import TestimonialsPage from "./pages/TestimonialsPage";
import TestimonialsProfilePage from "./components/TestimonialsProfilePage";
import ProductsPage from "./pages/ProductsPage";
import ProductProfile from "./components/ProductProfile";
import CatsPage from "./components/CatsPage";
import CatItem from "./components/CatItem";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <DesignSystem
      header={
        <SiteHeader
          title="Design System"
          navItems={[
            {
              label: "Cats",
              href: "/cats",
              isCurrent: location.pathname === "/cats",
            },
            { label: "Home", href: "/", isCurrent: location.pathname === "/" },
            {
              label: "About",
              href: "/about",
              isCurrent: location.pathname === "/about",
            },
            {
              label: "Components",
              href: "/components",
              isCurrent: location.pathname === "/components",
            },
            {
              label: "Users",
              href: "/users",
              isCurrent: location.pathname === "/users",
            },
            {
              label: "Products",
              href: "/products",
              isCurrent: location.pathname === "/products",
            },
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
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cats" Component={CatsPage} />
        <Route path="/cats/:id" Component={CatItem} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/components" Component={ComponentsPage} />
        <Route path="/users" Component={UsersPage} />
        <Route path="/products" Component={ProductsPage} />
        <Route path="/products/:productid" Component={ProductProfile} />
        <Route path="/users/:userid" Component={UserProfilePage} />
        <Route path="/users/testimonials/" Component={TestimonialsPage} />
        <Route
          path="/users/testimonials/:userid"
          Component={TestimonialsProfilePage}
        />
        <Route path="/components/accordion" Component={AccordionPage} />
        <Route path="/components/button" Component={ButtonPage} />
        <Route path="/components/tabs" Component={TabsPage} />
        <Route
          path="/components/cardnavigation"
          Component={CardNavigationPage}
        />
      </Routes>
    </DesignSystem>
  );
}

export default App;
