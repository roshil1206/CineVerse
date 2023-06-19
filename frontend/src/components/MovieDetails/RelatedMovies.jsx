import React from "react";
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

import MovieTile from "./MovieTile";

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

const RelatedMovies = () => {
  return (
    <Container>
      <BoxWrapper>
        <Box display="flex">
          <Text>You might also like</Text>
        </Box>
        <Wrapper>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <MovieTile key={i} />
          ))}
        </Wrapper>
      </BoxWrapper>
    </Container>
  );
};

export default RelatedMovies;
