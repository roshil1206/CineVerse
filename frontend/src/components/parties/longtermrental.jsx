/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../UI/CustomButton";

const Container = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
  "& .rental-card": {
    border: "1px solid #ccc",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  "& h2": {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  "& h3": {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px",
  },
  "& p": {
    color: "#666",
    fontSize: "16px",
    marginBottom: "15px",
  },
  "& a": {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "4px",
    textDecoration: "none",
  },
  "& a:hover": {
    backgroundColor: "#0056b3",
  },
  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  "& li": {
    marginBottom: "5px",
  },
}));

const longtermrental = () => {
  return (
    <Container>
      <h2>Long-Term Rentals</h2>
      <div className="rental-card">
        <h3>Education Rentals</h3>
        <p>
          Interested in long-term, recurring rentals for a meeting series, university classes, or
          faith-based services? Take advantage of our convenient and economical long-term packages.
        </p>
        <Link to="/long-term-rentals/inquire">INQUIRE NOW</Link>
      </div>

      <div className="rental-card">
        <h3>Class in Session - Education Rentals</h3>
        <p>
          Need more space? Enhance your daytime classes with state-of-the-art audio and visuals.
          Your PowerPoint presentations and videos will have an even greater impact on the big
          screen.
        </p>
        <Link to="/long-term-rentals/education">Learn More</Link>
      </div>

      <div className="rental-card">
        <h3>A Place to Worship - Faith-Based Rentals</h3>
        <p>
          Bring the community together with plenty of space, comfy seating, and excellent acoustics.
          We offer a unique set-up for special programs, stage space for a live band, and a
          delicious selection of post-service refreshments.
        </p>
        <Link to="/long-term-rentals/faith-based">Learn More</Link>
      </div>

      <div className="rental-card">
        <h3>Food and Drink - Classic Snack</h3>
        <p>
          Choose from our classic concession items, or upgrade your meeting with Cineplex catering.
        </p>
        <ul>
          <li>Small Popcorn and Small Fountain Drink - $9.50</li>
          <li>Regular Popcorn and Regular Fountain Drink - $10.50</li>
          <li>Small Popcorn and Bottled Drink - $9.50</li>
          <li>Large Popcorn, Large Fountain Drink & Candy - $16.00</li>
          <li>Regular Popcorn and Bottled Water - $10.00</li>
          <li>Large Popcorn and Large Fountain Drink - $12.00</li>
          <li>Regular Popcorn, Regular Fountain Drink & Candy - $14.50</li>
        </ul>
        <Link to="/food">
          <CustomButton theme="primary" to="/food">
            Explore Food and Beverages
          </CustomButton>
        </Link>
      </div>
    </Container>
  );
};

export default longtermrental;
