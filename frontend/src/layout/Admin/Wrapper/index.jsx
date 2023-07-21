import React from "react";
import AdminHeader from "../../../components/AdminHeader";
import Footer from "../../../components/Footer";

const index = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
      <Footer />
    </>
  );
};

export default index;
