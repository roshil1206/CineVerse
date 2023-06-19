import React from "react";
import { Container, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import movieImage from "../../assets/images/movieImage.jpeg";

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

const Wrapper = styled("div")({
  position: "relative",
  padding: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${movieImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(10px)",
    zIndex: -1,
  },
});

const ImageWrapper = styled("div")({
  marginRight: "24px",
  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
});

const Image = styled("img")({
  width: "250px",
  height: "300px",
  borderRadius: "10px",
  objectFit: "cover",
});

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  fontWeight: 600,
  marginTop: "1rem",
}));

const ShareButtonWrapper = styled("div")({
  position: "absolute",
  right: 0,
  top: "24px",
});

const ShareButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  padding: "0px",
  minWidth: "30px",
  borderRadius: "50%",
}));

const TextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
  textAlign: "left",
  color: theme.palette.white,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const DesText = styled(Typography)({
  fontSize: "12px",
});

const RatingText = styled(Typography)({
  fontSize: "12px",
});

const Div = styled("div")({
  display: "flex",
  padding: "4px 0",
  position: "relative",
  animation: `${slideInAnimation} 0.5s ease-in-out`,
});

const MovieOverview = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <ImageWrapper>
            <Image src={movieImage} alt="movieImage" />
          </ImageWrapper>
          <TextWrapper>
            <Typography variant="h3">Movie Title</Typography>
            <RatingText variant="p">Rating: 9.8/10</RatingText>
            <DesText variant="p">Duration | Languages | Release Date</DesText>
            <BookButton variant="contained" size="large">
              Book Now
            </BookButton>
          </TextWrapper>
          <ShareButtonWrapper>
            <ShareButton variant="contained">🔗</ShareButton>
          </ShareButtonWrapper>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default MovieOverview;
