import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const Seat = ({ seatNo, isSelected }) => {
  const SeatStyle = styled(Grid)({
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
      background: isSelected ? "rgba(255, 255, 255, 0.6)" : "",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
  });

  return (
    <SeatStyle container>
      <div>{seatNo}</div>
    </SeatStyle>
  );
};

export default Seat;
