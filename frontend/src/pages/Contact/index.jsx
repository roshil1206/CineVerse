import styled from "@emotion/styled";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import Container2 from "../../components/Contact/Container2";
import Container1 from "../../components/Contact/Container1";

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

const Contact = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
              <Container2 inputFields={inputFields} isMobileScreen={isMobileScreen} />
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default Contact;
