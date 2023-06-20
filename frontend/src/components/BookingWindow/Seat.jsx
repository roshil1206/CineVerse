import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";

const Seat = ({ seatNo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const SeatStyle = styled(Grid)(({ theme }) => ({
    width: "35px",
    height: "50px",
    marginBottom: "10px",
    marginTop: "-32px",
    background:
      "linear-gradient(to top, #761818, #761818, #761818, #761818, #761818, #B54041,  #F3686A)",
    alignItems: "top",
    justifyContent: "end",
    borderRadius: "7px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    fontSize: "1rem",
    padding: "0rem",
    cursor: "pointer",
    position: "relative",
    "& > div": {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      borderRadius: "7px",
      background: isClicked ? "rgba(255, 255, 255, 0.6)" : isHover ? "rgba(0, 0, 0, 0.5)" : "",
    },
  }));

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsHover(false);
  };

  const handleMouseEnter = () => {
    setIsHover(true & !isClicked);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <SeatStyle
      container
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div>{seatNo}</div>
    </SeatStyle>
  );
};

export default Seat;
