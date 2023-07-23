import React from "react";
import styled from "@emotion/styled";
import theme from "../../theme";

const TheatreCardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.white, // Set background color to white
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
});

const TheatreName = styled("h2")({
  color: theme.palette.brown,
  fontSize: "24px",
  fontWeight: "bold",
});

const TimeTileContainer = styled("div")({
  display: "flex",
  gap: "19px",
  cursor: "pointer",
});

const TimeTile = styled("div")({
  padding: "8px 16px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  color: theme.palette.white,
});

export default function TheatreCard({ theatreName, showtimes, theatreId, handleClick }) {
  return (
    <TheatreCardContainer>
      <TheatreName>{theatreName}</TheatreName>
      <TimeTileContainer>
        {showtimes.map((showtime, index) => (
          <TimeTile key={index} onClick={() => handleClick(showtime, theatreId)}>
            {showtime}
          </TimeTile>
        ))}
      </TimeTileContainer>
    </TheatreCardContainer>
  );
}
