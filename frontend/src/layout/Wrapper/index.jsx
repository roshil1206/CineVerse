import React from "react";
import Header from "../../components";

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
