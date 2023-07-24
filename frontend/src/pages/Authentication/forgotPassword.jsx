import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showEmailField, setShowEmailField] = useState(true);
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showEmailField) {
      if (!email.trim()) {
        setOtpError("Email field cannot be empty");
        return;
      }

      if (!validateEmail(email)) {
        setOtpError("Invalid email format");
        return;
      }

      console.log(`OTP requested for email: ${email}`);
      setShowEmailField(false);
      setOtpError("");
      setPasswordError("");
      setConfirmPasswordError("");
    } else {
      if (!otp.trim()) {
        setOtpError("OTP field cannot be empty");
        return;
      }

      if (!/^\d+$/.test(otp)) {
        setOtpError("OTP should contain only numeric values");
        return;
      }

      if (otp.length !== 6) {
        setOtpError("OTP should be a 6-digit number");
        return;
      }

      if (newPassword.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
        return;
      }

      if (!newPassword.trim()) {
        setPasswordError("Password field cannot be empty");
        return;
      }

      if (newPassword !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
      }

      console.log(`Changing password for email: ${email}, OTP: ${otp}, Password: ${newPassword}`);
      setEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setShowEmailField(true);
      setOtpError("");
      setPasswordError("");
      setConfirmPasswordError("");

      // Redirect to the login page after changing the password
      redirectToLogin();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "68vh",
        padding: "20px",
        boxSizing: "border-box",
      }}>
      <Card style={{ maxWidth: 400, width: "100%", margin: "auto", padding: "20px" }}>
        <CardContent>
          {showEmailField ? (
            <>
              <Typography variant="h5" component="h2" gutterBottom style={{ textAlign: "center" }}>
                Enter your Email address here!
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setOtpError("");
                    setPasswordError("");
                    setConfirmPasswordError("");
                  }}
                  style={{ marginBottom: "16px" }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send OTP
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography
                variant="body1"
                style={{ textAlign: "center", marginTop: "2px", padding: "15px" }}>
                OTP has been sent to your email address.
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="OTP"
                  variant="outlined"
                  fullWidth
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setOtpError("");
                  }}
                  error={!!otpError}
                  helperText={otpError}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="New Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setPasswordError("");
                  }}
                  error={!!passwordError}
                  helperText={passwordError}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordError("");
                  }}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  style={{ marginBottom: "16px" }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Change Password
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
