import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import movieImg from "../../assets/images/movieImage2.jpg";

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TileWrapper = styled("div")({
  minWidth: "200px",
  marginRight: "15px",
  animation: `${slideInAnimation} 0.5s ease-in-out`,
  cursor: "pointer",
});

const Image = styled("img")({
  borderRadius: "15px",
  marginBottom: "10px",
  width: "100%",
  height: "300px",
  boxShadow: `0px 2px 8px rgba(99, 99, 99, 0.2)`,
});

const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1,
  textAlign: "center",
}));

const MovieTile = () => {
  return (
    <Container>
      <TileWrapper>
        <div className="d-flex flex-column">
          <Image src={movieImg} alt="movieImg" />
          <Text>Movie Name</Text>
        </div>
      </TileWrapper>
    </Container>
  );
};

export default MovieTile;
