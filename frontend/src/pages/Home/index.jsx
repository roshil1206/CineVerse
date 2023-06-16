import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-console
  console.log("user", user);

  const handleRedirect = () => {
    navigate("/signin");
  };
  return (
    <div>
      Home Page
      <Button buttonText="Go to Signin Page" onClick={handleRedirect} />
    </div>
  );
};

export default Home;
