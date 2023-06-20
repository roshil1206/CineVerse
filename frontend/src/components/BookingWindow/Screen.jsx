import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Seat from "./Seat";
import { Tab, TabList, Tabs } from "react-tabs";

const TabsContainer = styled(Tabs)({
  width: "80%",
  minHeight: "200px",
  background: "#F3F3F3",
  margin: "2rem auto 1.5rem",
  color: "#E8F0F2",
  boxShadow: "0px 5px 5px 0px black",
});

const CustomTabList = styled(TabList)({
  display: "flex",
  alignItems: "center",
  background: "#FFFFFF",
  listStyle: "none",
  justifyContent: "space-between",
  paddingLeft: "0px",
  color: "#000000",
  fontSize: "1.25rem",
  marginTop: "0",
});

const CustomTab = styled(Tab)(({ isSelected }) => ({
  width: "50%",
  padding: "0.75rem",
  textAlign: "center",
  color: isSelected ? "black" : "gray",
  boxShadow: isSelected ? "0px 5px 5px 0px black" : "none",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(50, 224, 196, 0.15)",
    color: "black",
  },
}));

const Screen = ({ selectedSeats, handleSeatClick, handleTabChange }) => {
  const [isHoverTab1, setHoverTab1] = React.useState(false);
  const [isHoverTab2, setHoverTab2] = React.useState(false);
  const [isHoverTab3, setHoverTab3] = React.useState(false);
  const [isSelectedTab1, setSelectedTab1] = React.useState(true);
  const [isSelectedTab2, setSelectedTab2] = React.useState(false);
  const [isSelectedTab3, setSelectedTab3] = React.useState(false);

  const handleMouseEnter1 = () => {
    setHoverTab1(true);
  };

  const handleMouseLeave1 = () => {
    setHoverTab1(false);
  };

  const handleMouseEnter2 = () => {
    setHoverTab2(true);
  };

  const handleMouseLeave2 = () => {
    setHoverTab2(false);
  };

  const handleMouseEnter3 = () => {
    setHoverTab3(true);
  };

  const handleMouseLeave3 = () => {
    setHoverTab3(false);
  };

  const handleMouseClick1 = () => {
    !isSelectedTab1 && handleTabChange();
    setSelectedTab1(true);
    setSelectedTab2(false);
    setSelectedTab3(false);
  };

  const handleMouseClick2 = () => {
    !isSelectedTab2 && handleTabChange();
    setSelectedTab1(false);
    setSelectedTab2(true);
    setSelectedTab3(false);
  };

  const handleMouseClick3 = () => {
    !isSelectedTab3 && handleTabChange();
    setSelectedTab1(false);
    setSelectedTab2(false);
    setSelectedTab3(true);
  };

  const renderSeats = (
    startRow,
    endRow,
    leftRowTransform,
    leftRowSeatTransform,
    rightRowTransform,
    rightRowSeatTransform
  ) => {
    const rowName = ["A", "B", "C", "D", "E", "F"].reverse();
    const leftSeatsList = [];
    const rightSeatsList = [];
    const seats = [];

    for (let i = startRow; i <= endRow; i++) {
      const leftRowStyle = {
        transform: `skew(${leftRowTransform + i}deg)`,
        margin: "0 6px",
      };

      const rightRowStyle = {
        transform: `skew(${rightRowTransform + i}deg)`,
        margin: "0 6px",
      };

      const leftSeatStyle = {
        transform: `skew(${leftRowSeatTransform - 2 * i}deg)`,
      };

      const rightSeatStyle = {
        transform: `skew(${rightRowSeatTransform - 2 * i}deg)`,
      };

      const leftSeats = (
        <div key={`leftRow-${i}`} style={leftRowStyle}>
          {rowName.map((row, index) => {
            const seatNo = `${row}${i + 1}`;
            const isSelected = selectedSeats.includes(seatNo);

            return (
              <div
                key={`leftSeat-${i}-${index}`}
                style={leftSeatStyle}
                onClick={() => handleSeatClick(seatNo)}>
                <Seat seatNo={seatNo} isSelected={isSelected} />
              </div>
            );
          })}
        </div>
      );

      const rightSeats = (
        <div key={`rightRow-${i}`} style={rightRowStyle}>
          {rowName.map((row, index) => {
            const seatNo = `${row}${i + 7}`;
            const isSelected = selectedSeats.includes(seatNo);

            return (
              <div
                key={`rightSeat-${i}-${index}`}
                style={rightSeatStyle}
                onClick={() => handleSeatClick(seatNo)}>
                <Seat seatNo={seatNo} isSelected={isSelected} />
              </div>
            );
          })}
        </div>
      );

      leftSeatsList.push(leftSeats);
      rightSeatsList.push(rightSeats);
    }

    seats.push(
      <div style={{ display: "flex" }}>{leftSeatsList}</div>,
      <div style={{ display: "flex", marginLeft: "70px" }}>{rightSeatsList}</div>
    );

    return seats;
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <TabsContainer>
          <CustomTabList>
            <CustomTab
              isHover={isHoverTab1}
              isSelected={isSelectedTab1}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              onClick={handleMouseClick1}>
              11 : 00 AM
            </CustomTab>
            <CustomTab
              isHover={isHoverTab2}
              isSelected={isSelectedTab2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={handleMouseClick2}>
              04 : 00 PM
            </CustomTab>
            <CustomTab
              isHover={isHoverTab3}
              isSelected={isSelectedTab3}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={handleMouseClick3}>
              08 : 00 PM
            </CustomTab>
          </CustomTabList>
          <div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "10px",
              }}>
              Selected Seats: {selectedSeats.length}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  overflow: "auto",
                  height: "100%",
                  paddingTop: "50px",
                  paddingLeft: "25px",
                }}>
                {renderSeats(0, 5, -14, 20, 8, -8)}
              </div>
            </div>
          </div>
        </TabsContainer>
      </Grid>
    </Grid>
  );
};

export default Screen;
