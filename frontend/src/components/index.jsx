import { AppBar, Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  height: "48px",
  paddingLeft: "10px",
  paddingRight: "10px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.cyan,
}));

const StyledButtonOutline = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.cyan,
  color: theme.palette.cyan,
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const links = ["Home", "Booking", "Contact"];

const Header = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledAppBar position="static">
      <Box>
        <Grid container justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h1" color="primary">
              Cineverse
            </Typography>
          </div>
          <Grid>
            <Tabs value={value} onChange={handleChange}>
              {links.map((link, key) => (
                <Tab label={link} key={key} {...a11yProps(key)} />
              ))}
            </Tabs>
          </Grid>
          <Grid>
            <StyledButton variant="contained" style={{ marginRight: "10px" }}>
              Login
            </StyledButton>
            <StyledButtonOutline variant="outlined">Sign up</StyledButtonOutline>
          </Grid>
        </Grid>
      </Box>
    </StyledAppBar>
  );
};

export default Header;
