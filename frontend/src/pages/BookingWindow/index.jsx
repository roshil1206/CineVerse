import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Tab, TabList, Tabs } from "react-tabs";
import Screen from "../../components/BookingWindow/Screen";

const TabsContainer = styled(Tabs)({
  width: "80%",
  minHeight: "350px",
  background: "#F3F3F3",
  margin: "0.5rem auto 1.5rem",
  color: "#E8F0F2",
  boxShadow: "0px 5px 5px 0px black",
});

const CustomTabList = styled(TabList)({
  display: "flex",
  alignItems: "center",
  background: "#FFFFFF",
  justifyContent: "space-between",
  paddingLeft: "0px",
  color: "#000000",
  fontSize: "1.25rem",
  marginTop: "0",
});

const CustomTab = styled(Tab)(({ isSelected }) => ({
  width: "50%",
  padding: "0.75rem",
  listStyle: "none",
  textAlign: "center",
  color: isSelected ? "black" : "gray",
  cursor: "pointer",
  boxShadow: isSelected ? "0px 5px 5px 0px black" : "none",
  "&:hover": {
    background: "rgba(50, 224, 196, 0.15)",
    color: "black",
  },
}));

const PaymentButton = styled(Button)({
  "& .MuiButtonBase-root": {
    background: "#052F58",
    color: "white",
    width: "150px",
  },
});

const BookingWindow = () => {
  const [isSelectedTab1, setSelectedTab1] = useState(true);
  const [isSelectedTab2, setSelectedTab2] = useState(false);

  const handleMouseClick1 = () => {
    setSelectedTab1(true);
    setSelectedTab2(false);
  };

  const handleMouseClick2 = () => {
    setSelectedTab2(true);
    setSelectedTab1(false);
  };

  return (
    <Grid container justifyContent="center">
      <TabsContainer>
        <CustomTabList>
          <CustomTab isSelected={isSelectedTab1} onClick={handleMouseClick1}>
            Today
          </CustomTab>
          <CustomTab isSelected={isSelectedTab2} onClick={handleMouseClick2}>
            Tomorrow
          </CustomTab>
        </CustomTabList>
        <Screen />
        <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
          <PaymentButton type="submit" variant="contained">
            <b>PROCEED TO PAYMENT</b>
          </PaymentButton>
        </Grid>
      </TabsContainer>
    </Grid>
  );
};

export default BookingWindow;
