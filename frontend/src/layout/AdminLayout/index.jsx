import React from "react";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
      <Footer />
    </>
  );
};

export default AdminLayout;
