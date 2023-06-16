import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { setUser } from "../../store/actions/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });
  const dispatch = useDispatch();
  // const actions = useStoreActions({ setUser });

  const handleSignIn = async () => {
    await dispatch(setUser(userDetails));
    userDetails.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");
    setUserDetails({
      email: "",
      password: "",
      isAdmin: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setUserDetails({ ...userDetails, [name]: checked });
  };

  return (
    <div>
      SignIn Page
      <div>
        <Input name="email" placeholder="email" value={userDetails.email} onChange={handleChange} />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <input
          name="isAdmin"
          type="checkbox"
          checked={userDetails.isAdmin}
          onChange={handleCheckbox}
        />
        <label htmlFor="isAdmin">Is Admin</label>
        <Button buttonText="Sign In" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
