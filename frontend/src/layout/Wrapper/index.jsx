import React from "react";
import Header from "../../components/Header";

const index = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default index;
