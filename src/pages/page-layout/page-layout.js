import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useMobileDisplay } from "../../hooks/display-hook";

function MobileSpacer() {
  return (
    <div className="fixed-header-space"></div>
  );
}

function PageLayout() {
  return (
    <>
      <Header />
      { useMobileDisplay() && <MobileSpacer /> }
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
