import React from "react";
import CustomInput from "../UI/CustomInput";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import styled from "@emotion/styled";

const Container = styled(Box)(({ theme }) => ({
  padding: "2rem",
  "& .gridItem": {
    padding: "0 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const Container2 = ({ isMobileScreen, inputFields }) => {
  return (
    <Container>
      {isMobileScreen && (
        <Typography variant="h4" color="secondary">
          Please fill the form, our team will get back to you within 24 hours.
        </Typography>
      )}
      <Grid container justifyContent="space-between">
        {inputFields.map((field, key) => (
          <Grid item xs={12} sm={6} key={key} className="gridItem">
            <CustomInput {...field} />
          </Grid>
        ))}
      </Grid>
      <Grid item xm={12} className="gridItem">
        <CustomInput label="Message" multiline={true} minRows={3} maxRows={4} />
      </Grid>
      <Grid container justifyContent="flex-end">
        <CustomButton variant="contained" color="secondary" style={{ marginTop: "20px" }}>
          Send Message
        </CustomButton>
      </Grid>
    </Container>
  );
};

export default Container2;
