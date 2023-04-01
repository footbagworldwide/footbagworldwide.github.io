import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
