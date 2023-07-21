import React from "react";
import styled from "@emotion/styled";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const TheaterCardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.white, // Set background color to white
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
});

const TheaterName = styled("h2")({
  color: theme.palette.brown,
  fontSize: "24px",
  fontWeight: "bold",
});

const TimeTileContainer = styled("div")({
  display: "flex",
  gap: "19px", // Adjust the gap between time tiles
});

const TimeTile = styled("div")({
  padding: "8px 16px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  color: theme.palette.white,
});

export default function TheaterCard({ theaterName, showtimes }) {
  const navigate = useNavigate();
  return (
    <TheaterCardContainer>
      <TheaterName>{theaterName}</TheaterName>
      <TimeTileContainer>
        {showtimes.map((showtime, index) => (
          <TimeTile
            key={index}
            onClick={() => {
              navigate(`/booking`);
            }}>
            {showtime}
          </TimeTile>
        ))}
      </TimeTileContainer>
    </TheaterCardContainer>
  );
}
