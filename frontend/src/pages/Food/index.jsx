import React, { useState, useMemo } from "react";
import { Box, Button, Grid, Fab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomCard from "./CustomCard";
import { foodData } from "../../mock/index";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/UI/CustomButton";

const styles = {
  boxRoot: {
    "&.MuiBox-root": {
      marginTop: "60px",
      padding: "10px",
    },
  },
  box: {
    "&.MuiBox-root": {
      padding: "5rem 0",
    },
  },
  buttonsContainer: {
    "&.MuiBox-root": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  activeButton: {
    color: "#ffffff",
    borderColor: "#e53861",
    backgroundColor: "#e53861",
  },
};

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  //   color: theme.palette.black,
  margin: "10px",
  fontSize: "16px",
  borderRadius: "50px",
  "&.MuiButton-root:hover": {
    border: "1px solid #e53861",
  },
  "& .MuiTouchRipple-child": {
    backgroundColor: "#e53861",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "5px",
    fontSize: "12px",
  },
}));

const CustomFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "10px",
  left: "10px",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: "#e53861",
    color: "#fff",
  },
}));

const buttons = ["All", "Food", "Beverages", "Combos"];

const FoodandBeverages = () => {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredData = useMemo(() => {
    if (selectedButton === 1) {
      return foodData.filter((item) => item.type === "food");
    } else if (selectedButton === 2) {
      return foodData.filter((item) => item.type === "beverages");
    } else if (selectedButton === 3) {
      return foodData.filter((item) => item.type === "combo");
    } else return foodData;
  }, [selectedButton]);

  return (
    <Box sx={styles.boxRoot}>
      <Box sx={styles.box}>
        <Typography variant="h1" color="darkBlue" textAlign="center">
          Food and Beverages
        </Typography>
        <Typography variant="subtitle1" color="lightPurple" textAlign="center">
          Food for the soul!
        </Typography>
      </Box>
      <Box sx={styles.buttonsContainer}>
        {buttons.map((button, key) => (
          <StyledButton
            key={key}
            variant={selectedButton === key ? "contained" : "outlined"}
            sx={selectedButton === key ? styles.activeButton : ""}
            onClick={() => setSelectedButton(key)}>
            {button}
          </StyledButton>
        ))}
      </Box>
      <Box>
        <Grid container>
          {filteredData.map((item, key) => (
            <Grid item xs={6} sm={4} lg={3} key={key} style={{ height: "100%" }}>
              <CustomCard
                data={item}
                onAdd={() => setSelectedItems((current) => [...current, item.name])}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <CustomFab disableRipple={true}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/cart.svg" style={{ height: "20px", width: "20px" }} alt="cart" />
          <span style={{ marginLeft: "2px", color: "white" }}>{selectedItems.length}</span>
        </div>
      </CustomFab>
      <Grid container justifyContent="flex-end">
        <CustomButton
          variant="contained"
          disabled={selectedItems.length === 0}
          onClick={() => alert("Work in progress.")}>
          Continue
        </CustomButton>
      </Grid>
    </Box>
  );
};

export default FoodandBeverages;
