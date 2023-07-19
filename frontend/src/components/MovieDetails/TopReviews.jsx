import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import ReviewTile from "./ReviewTile";
import AddReviewModal from "./AddReviewModal";
import axios from "axios";

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

const TopReviews = ({ reviews, id, updateMovie }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (reviewState) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/movies/${id}/reviews`, reviewState);
      updateMovie(data);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <AddReviewModal open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
      <MainWrapper>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Text>Top Reviews</Text>
          <Button onClick={() => setOpen(true)}>Add Review &gt;</Button>
        </Box>
        <Wrapper>
          {reviews.map((review, i) => (
            <ReviewTile key={i} review={review} />
          ))}
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};

export default TopReviews;
