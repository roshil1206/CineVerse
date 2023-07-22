import React, { useEffect, useState } from "react";
import * as Components from "../../components/Authentication/Auth";
import { Alert, Snackbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../store/Auth/actions";
import { isLogin } from "../../utils/functions";

function Authentication() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(state?.register ? false : true);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [snackBarMessage, setSnackBarMessage] = React.useState("");
  const [errorType, setErrorType] = React.useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z]*$/;

  const { user } = useSelector((state) => state.authReducer);
  const { error, message } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isLogin()) {
      navigate("/");
    }
  }, [user]);

  const resetField = () => {
    setName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRePassword("");
  };

  const handleToggle = () => {
    setErrors({});
    toggle(!signIn);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Name can contain only alphabets";
    }

    if (!emailRegex.test(registerEmail)) {
      newErrors.registerEmail = "Email is invalid";
    } else if (registerEmail.trim() === "") {
      newErrors.registerEmail = "Email is required";
    }

    if (registerPassword.length < 8) {
      newErrors.registerPassword = "Password is too short";
    } else if (registerPassword.trim() === "") {
      newErrors.registerPassword = "Password is required";
    }

    if (rePassword.trim() === "") {
      newErrors.rePassword = "Re-Password is required";
    } else if (registerPassword !== rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(`/user/register`, {
          name,
          email: registerEmail,
          password: registerPassword,
          confirmPassword: rePassword,
        });

        const { data } = response;
        if (data.success) {
          toggle(!signIn);
          setErrorType("success");
          setOpen(true);
          setSnackBarMessage("Registration Successful!");
          resetField();
        } else {
          console.error("Registration failed:", data.message);
          setErrorType("error");
          setOpen(true);
          setSnackBarMessage(data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        setErrorType("error");
        setOpen(true);
        setSnackBarMessage("User Already Exists!");
      }
    }
  };

  const handleLogin = async (e) => {
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = {
        email,
        password,
      };
      dispatch(setUserAction(data));

      if (error) {
        setErrorType("error");
        setOpen(true);
        setSnackBarMessage(message);
      }
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
            <Components.Title>Sign Up</Components.Title>

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
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            {errors && <Components.Error>{errors.registerEmail}</Components.Error>}

            <Components.Input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {errors && <Components.Error>{errors.registerPassword}</Components.Error>}

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

            {/* <Components.Anchor href="#">Forgot your password?</Components.Anchor> */}

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
        <Alert severity={errorType} sx={{ width: "100%", letterSpacing: "0em" }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </Components.MainContainer>
  );
}

export default Authentication;
