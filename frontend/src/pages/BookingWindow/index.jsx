import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Tab, TabList, Tabs } from "react-tabs";
import Screen from "../../components/BookingWindow/Screen";
import { movies } from "../../mock";
import theme from "../../theme";

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
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const movie = movies.find((movie) => movie.id === +movieId);
  const [isSelectedTab1, setSelectedTab1] = useState(true);
  const [isSelectedTab2, setSelectedTab2] = useState(false);
  const [selectedSeats, handleSelectedSeats] = useState([]);

  const handleMouseClick1 = () => {
    !isSelectedTab1 && handleTabChange();
    setSelectedTab1(true);
    setSelectedTab2(false);
  };

  const handleMouseClick2 = () => {
    !isSelectedTab2 && handleTabChange();
    setSelectedTab2(true);
    setSelectedTab1(false);
  };

  const handleSeatClick = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      handleSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
    } else {
      handleSelectedSeats([...selectedSeats, seatNo]);
    }
  };

  const handleTabChange = () => {
    handleSelectedSeats([]);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", color: theme.palette.brown }}>
        <h2>{movie.name}</h2>
      </div>
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
          <Screen
            selectedSeats={selectedSeats}
            handleSeatClick={handleSeatClick}
            handleTabChange={handleTabChange}
          />
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
            <PaymentButton
              type="submit"
              variant="contained"
              disabled={selectedSeats.length === 0}
              onClick={() => alert("TBD")}>
              <b>PROCEED TO PAYMENT</b>
            </PaymentButton>
          </Grid>
        </TabsContainer>
      </Grid>
    </>
  );
};

export default BookingWindow;
