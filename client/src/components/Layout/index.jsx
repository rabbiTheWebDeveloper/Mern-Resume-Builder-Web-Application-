//External Lib Import
import { useEffect } from "react";

//Internal Lib Import
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
