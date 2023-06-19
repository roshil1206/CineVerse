import React from "react";
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

import MovieTile from "./MovieTile";
import { useNavigate } from "react-router-dom";

const BoxWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "16px 0",
  gap: "1rem",
});

const Wrapper = styled(Box)({
  overflow: "auto",
  width: "100%",
  display: "flex",
  margin: "10px 0",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&::-webkit-scrollbar-thumb": {
    display: "none",
  },
});

const Text = styled(Typography)(({ theme }) => ({
  size: theme.typography.h5,
  fontWeight: "bold",
}));

const RelatedMovies = ({ currentMovie, movies }) => {
  const navigate = useNavigate();

  const relatedMovies = movies.filter((movie) => movie.genre === currentMovie.genre);

  const handleRedirect = (movieId) => {
    navigate(`/movies?id=${movieId}`);
  };

  return (
    <Container>
      <BoxWrapper>
        <Box display="flex">
          <Text>You might also like</Text>
        </Box>
        <Wrapper>
          {relatedMovies.map((movie, i) => (
            <Box key={i} onClick={() => handleRedirect(movie.id)}>
              <MovieTile movie={movie} />
            </Box>
          ))}
        </Wrapper>
      </BoxWrapper>
    </Container>
  );
};

export default RelatedMovies;
