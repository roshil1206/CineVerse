import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
