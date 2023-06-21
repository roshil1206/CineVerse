import React, { useState } from "react";
import * as Components from "../../components/Authentication/Auth";
import { Alert, Snackbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function Authentication() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(state?.register ? false : true);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /[a-zA-Z]+$/;

  const resetField = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  const handleToggle = () => {
    setErrors({});
    toggle(!signIn);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Name cannot contain numbers";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Email is invalid";
    } else if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.length < 8) {
      newErrors.password = "Password is too short";
    } else if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (rePassword.trim() === "") {
      newErrors.rePassword = "Re-Password is required";
    } else if (password !== rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration submitted!");
      toggle(!signIn);
      setOpen(true);
      resetField();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!emailRegex.test(email)) {
      newErrors.email = "Email is invalid";
    } else if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.length < 8) {
      newErrors.password = "Password is too short";
    } else if (password.trim() === "") {
      newErrors.password = "Password is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/");
    }
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <Components.MainContainer>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>

            <Components.Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors && <Components.Error>{errors.name}</Components.Error>}

            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors && <Components.Error>{errors.email}</Components.Error>}

            <Components.Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors && <Components.Error>{errors.password}</Components.Error>}

            <Components.Input
              type="password"
              placeholder="Re-Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            {errors && <Components.Error>{errors.rePassword}</Components.Error>}

            <Components.Button onClick={(e) => handleRegister(e)}>Register</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>

            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors && <Components.Error>{errors.email}</Components.Error>}

            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors && <Components.Error>{errors.password}</Components.Error>}

            <Components.Anchor href="#">Forgot your password?</Components.Anchor>

            <Components.Button onClick={(e) => handleLogin(e)}>Login</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome to Cineverse!</Components.Title>

              <Components.Paragraph>Login with Your Details</Components.Paragraph>

              <Components.GhostButton onClick={() => handleToggle()}>Login</Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Namaste!</Components.Title>

              <Components.Paragraph>Register with Cineverse</Components.Paragraph>

              <Components.GhostButton onClick={() => handleToggle()}>
                Register
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
      <Snackbar open={open} autoHideDuration={2000} onClose={closeSnackbar}>
        <Alert severity="success" sx={{ width: "100%", letterSpacing: "0em" }}>
          Registration successful!
        </Alert>
      </Snackbar>
    </Components.MainContainer>
  );
}

export default Authentication;