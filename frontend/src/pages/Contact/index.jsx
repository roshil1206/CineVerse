import styled from "@emotion/styled";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import Container2 from "../../components/Contact/Container2";
import Container1 from "../../components/Contact/Container1";
import { isCharactersInStringOnly, isEmailValid, isPhoneValid } from "../../utils/functions";

const styles = {
  box: {
    "&.MuiBox-root": {
      padding: "5rem 0",
    },
  },
  gridContainer: {
    height: "100%",
  },
};

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  margin: "0 4rem",
  padding: "10px",
  borderRadius: 5,
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 1rem",
  },
}));

const inputFields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "phone" },
];

const dataObject = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState({ ...dataObject });
  const [errors, setErrors] = useState({ ...dataObject });
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleDataChange = (e, name) => {
    setData((current) => ({ ...current, [name]: e.target.value }));
  };

  const isDataValid = () => {
    let valid = true;
    const error = { ...dataObject };

    if (!isCharactersInStringOnly(data.firstName)) {
      valid = false;
      error.firstName = "Please enter valid first name.";
    }
    if (data.firstName.trim().length < 1) {
      valid = false;
      error.firstName = "Please enter a valid first name.";
    }

    if (!isCharactersInStringOnly(data.lastName)) {
      valid = false;
      error.lastName = "Please enter valid last name.";
    }
    if (data.lastName.trim().length < 1) {
      valid = false;
      error.lastName = "Please enter a valid last name.";
    }

    if (!isCharactersInStringOnly(data.lastName)) {
      valid = false;
      error.lastName = "Please enter valid last name.";
    }
    if (data.lastName.trim().length < 1) {
      valid = false;
      error.lastName = "Please enter a valid last name.";
    }

    if (!isEmailValid(data.email)) {
      valid = false;
      error.email = "Please enter a valid email address.";
    }

    if (!isPhoneValid(data.phone)) {
      valid = false;
      error.phone = "Please enter a valid phone number.";
    }

    if (data.message.length < 5) {
      valid = false;
      error.message = "Please enter a descriptive message.";
    }

    setErrors(error);
    return valid;
  };

  const handleOnSubmit = () => {
    if (isDataValid()) {
      setLoading(true);
      setData({ ...dataObject });
      setTimeout(() => {
        setLoading(false);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      }, 3000);
    }
  };

  return (
    <div>
      <Box sx={styles.box}>
        <Typography variant="h1" color="darkBlue" textAlign="center">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="lightPurple" textAlign="center">
          Any question? Just write us a message!
        </Typography>
      </Box>
      <ContentContainer>
        <Grid container direction={{ xs: "column-reverse", sm: "row" }}>
          <Grid item md={5} sm={6}>
            <Container1 isMobileScreen={isMobileScreen} />
          </Grid>
          <Grid item md={7} sm={6}>
            <Grid container alignItems="center" style={styles.gridContainer}>
              <Container2
                inputFields={inputFields}
                isMobileScreen={isMobileScreen}
                handleDataChange={handleDataChange}
                data={data}
                handleOnSubmit={handleOnSubmit}
                errors={errors}
                disabled={loading}
                showMessage={showMessage}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default Contact;
