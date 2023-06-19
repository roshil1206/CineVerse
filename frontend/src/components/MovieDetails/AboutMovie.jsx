import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "16px 0",
  marginTop: "10px",
  gap: "1rem",
});

const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  textAlign: "justify",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5,
  fontWeight: "bold",
}));

const AboutMovie = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>About the movie</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s when an unknown printer took a
          galley of type and scrambled it to make a type specimen book It has survived not only five
          centuries, but also the leap into electronic typesetting remaining essentially unchanged
        </Text>
      </Wrapper>
    </Container>
  );
};

export default AboutMovie;
