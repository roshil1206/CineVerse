import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { MdOutlineMenu } from "react-icons/md";
import CustomListItem from "./CustomListItem";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  height: "48px",
  paddingLeft: "10px",
  paddingRight: "10px",
  [theme.breakpoints.down("sm")]: {
    height: "52px",
  },
}));

const StyledTab = styled(Tab)(() => ({
  fontSize: "1rem",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const StyledButtonOutline = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const links = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "/contact" },
  { name: "FAQs", link: "/faq" },
];

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activePath = "/" + pathname.split("/")[1];
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(activePath);
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerState(open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <StyledAppBar position="static">
      {isMobileScreen ? (
        <Grid container alignItems="center">
          <IconButton
            anchor="drawerButton"
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}>
            <MdOutlineMenu color="darkBlue" />
          </IconButton>
          <Typography
            variant="h1"
            color="primary"
            style={{ cursor: "pointer" }}
            onClick={handleHomeRedirect}>
            Cineverse
          </Typography>
          <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
            <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <List>
                {links.map((text, index) => (
                  <CustomListItem
                    name={text.name}
                    link={text.link}
                    key={index}
                    isActive={text.link === activePath}
                  />
                ))}
              </List>
            </Box>
          </Drawer>
        </Grid>
      ) : (
        <Box>
          <Grid container justifyContent="space-between" alignItems="center">
            <div>
              <Typography
                variant="h1"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={handleHomeRedirect}>
                Cineverse
              </Typography>
            </div>
            <Grid>
              <Tabs value={value} onChange={handleChange}>
                {links.map((data, key) => (
                  <StyledTab label={data.name} value={data.link} key={key} {...a11yProps(key)} />
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
      )}
    </StyledAppBar>
  );
};

export default Header;
