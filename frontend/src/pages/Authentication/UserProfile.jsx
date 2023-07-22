import React, { useState } from "react";
import {
  Button,
  Grid,
  Avatar,
  Card,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
  TextField,
  Box,
} from "@mui/material";

const UserProfile = () => {
  const styles = {
    box: {
      "&.MuiBox-root": {
        padding: "2rem 0",
        paddingTop: "0",
      },
    },
    titleBar: {
      width: "100%",
    },
    gridContainer: {
      height: "100%",
    },
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalcode: "",
    province: "",
    dob: "",
    profilePic: null,
    phone: "",
    country: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setState({
      ...state,
      profilePic: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  const enableEditMode = (event) => {
    event.preventDefault();
    setEditMode(true);
    setEditProfilePic(true);
  };

  const saveProfileHandler = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  const validateForm = () => {
    const regex = /^[a-zA-Z ]*$/;
    const countryRegex = /^[a-zA-Z ]*$/;
    const provinceRegex = /^[a-zA-Z ]*$/;
    const cityRegex = /^[a-zA-Z ]*$/;
    const phoneRegex = /^\d+$/;
    const validationErrors = {};

    if (!state.name.trim().match(regex)) {
      validationErrors.name = "Name can only contain letters and spaces";
    }

    if (!state.country.trim().match(countryRegex)) {
      validationErrors.country = "Country can only contain letters and spaces";
    }

    if (!state.province.trim().match(provinceRegex)) {
      validationErrors.province = "Province can only contain letters and spaces";
    }

    if (!state.city.trim().match(cityRegex)) {
      validationErrors.city = "City can only contain letters and spaces";
    }

    if (state.phone.trim() !== "" && !state.phone.trim().match(phoneRegex)) {
      validationErrors.phone = "Phone number can only contain digits";
    }

    return validationErrors;
  };

  return (
    <Grid
      container
      spacing={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}>
      <div style={styles.titleBar}>
        <Box sx={styles.box}>
          <Typography variant="h1" color="darkBlue" textAlign="center">
            User Profile
          </Typography>
        </Box>
      </div>

      <div
        style={{
          display: "block",
          width: 400,
          paddingLeft: 30,
        }}></div>
      <Card
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80vw",
          marginBottom: "2rem",
        }}>
        {editProfilePic ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <Avatar
              src={state.profilePic}
              style={{ width: "200px", height: "200px", margin: "10px 0" }}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="profile-pic-upload"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="profile-pic-upload">
              <Button component="span" variant="contained" color="primary">
                Upload Profile Picture
              </Button>
            </label>
          </div>
        ) : (
          <Avatar
            src={state.profilePic}
            style={{ width: "200px", height: "200px", margin: "10px 0" }}
          />
        )}
        <Typography variant="h6" style={{ marginBottom: "10px", marginTop: "20px", width: "100%" }}>
          General Information
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="name-input"
                  name="name"
                  disabled={!editMode}
                  label="Name"
                  value={state.name}
                  onChange={handleInputChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <OutlinedInput
                  id="email-input"
                  name="email"
                  disabled
                  value={state.email}
                  onChange={handleInputChange}
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="contact-input"
                  name="phone"
                  disabled={!editMode}
                  value={state.phone}
                  onChange={handleInputChange}
                  label="Phone No"
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h6" style={{ marginBottom: "10px", marginTop: "20px" }}>
            Address Information
          </Typography>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="country-input"
                  name="country"
                  disabled={!editMode}
                  label="Country"
                  value={state.country}
                  onChange={handleInputChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="province-input"
                  name="province"
                  disabled={!editMode}
                  label="Province"
                  value={state.province}
                  onChange={handleInputChange}
                  error={Boolean(errors.province)}
                  helperText={errors.province}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="city-input"
                  name="city"
                  disabled={!editMode}
                  label="City"
                  value={state.city}
                  onChange={handleInputChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                />
              </FormControl>
            </Grid> */}
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <InputLabel htmlFor="address-input">Unit</InputLabel>
                <OutlinedInput
                  id="address-input"
                  name="address"
                  disabled={!editMode}
                  value={state.address}
                  onChange={handleInputChange}
                  label="Unit"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <InputLabel htmlFor="address-input">Street</InputLabel>
                <OutlinedInput
                  id="address-input"
                  name="street"
                  disabled={!editMode}
                  value={state.street}
                  onChange={handleInputChange}
                  label="Street"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <InputLabel htmlFor="address-input">Postalcode</InputLabel>
                <OutlinedInput
                  id="postal-input"
                  name="postalcode"
                  disabled={!editMode}
                  value={state.postalcode}
                  onChange={handleInputChange}
                  label="Postalcode"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="country-input"
                  name="country"
                  disabled={!editMode}
                  label="Country"
                  value={state.country}
                  onChange={handleInputChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="province-input"
                  name="province"
                  disabled={!editMode}
                  label="Province"
                  value={state.province}
                  onChange={handleInputChange}
                  error={Boolean(errors.province)}
                  helperText={errors.province}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" style={{ marginBottom: "10px", width: "100%" }}>
                <TextField
                  variant="outlined"
                  id="city-input"
                  name="city"
                  disabled={!editMode}
                  label="City"
                  value={state.city}
                  onChange={handleInputChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                />
              </FormControl>
            </Grid>
          </Grid>

          {!editMode ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={enableEditMode}
              style={{ marginTop: "10px" }}>
              Edit Profile
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={saveProfileHandler}
              style={{ marginTop: "10px" }}>
              Save Profile
            </Button>
          )}
        </form>
      </Card>
    </Grid>
  );
};

export default UserProfile;
