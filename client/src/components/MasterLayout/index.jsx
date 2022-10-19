//External Lib Import
import { useEffect } from "react";

//Internal Lib Import
import Footer from "../Layout/Footer";
import Header from "./Header";

const MasterLayout = ({ children }) => {
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

export default MasterLayout;
