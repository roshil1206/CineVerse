import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/Button";
import { logOutUser } from "../../store/actions/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <div>
      Dashboard Page
      <Button buttonText="Sign Out" onClick={handleLogout} />
    </div>
  );
};

export default Dashboard;
