import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../src/theme";

const CurrentMovieBannerContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "calc(70vh - 120px)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.white,
});

const OverlayContainer = styled("div")({
  backgroundColor: "rgba(0, 0 ,0 , 0.5)",
  padding: "20px",
  justifyContent: "end",
});

const Title = styled("h2")({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  marginBottom: "10px",
  fontFamily: theme.typography.h2.fontFamily,
});

const Description = styled("p")({
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
});

export default function CurrentMovieBanner({ movies }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <ThemeProvider theme={theme}>
      <CurrentMovieBannerContainer
        style={{ backgroundImage: `url(${currentMovie.backgroundImage})` }}>
        <OverlayContainer>
          <Title>{currentMovie.title}</Title>
          <Description>{currentMovie.description}</Description>
        </OverlayContainer>
      </CurrentMovieBannerContainer>
    </ThemeProvider>
  );
}
