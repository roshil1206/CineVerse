import React from "react";
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import ReviewTile from "./ReviewTile";

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

const AllReviews = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const MainWrapper = styled("div")`
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Wrapper = styled(Box)({
  overflow: "auto",
  width: "100%",
  display: "flex",
  gap: "1rem",
  animation: `${slideInAnimation} 0.5s ease-in-out`,
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

const TopReviews = () => {
  return (
    <Container>
      <MainWrapper>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Text>Top Reviews</Text>
          <AllReviews variant="subtitle2">8K reviews &gt;</AllReviews>
        </Box>
        <Wrapper>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <ReviewTile key={i} />
          ))}
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};

export default TopReviews;
