import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "styled-components";

const Container = styled(Box)(() => ({
  margin: "2rem 0",
}));

const RentalCard = styled.div`
  /* Styles for the rental card */
  position: relative;
  width: calc(33.33% - 10px); /* Adjust the width to fill the available space in the row */
  height: 250px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #ccc; /* Light grey border */
  padding: 20px;
  margin-bottom: 20px;
  margin: 0 auto;
  background-color: #f9f9f9;

  /* Screen-like effect */
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: 80%; /* Adjusted to cover most of the card */
    border: 2px solid #ccc;
    border-radius: 14px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    pointer-events: none; /* Disable interaction with the pseudo-element */
  }

  /* Keyboard-like effect at the bottom */
  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: 30px;
    background-color: #d9d9d9; /* Light grey background */
    border-radius: 0 0 10px 10px; /* Rounded bottom corners */
  }

  /* Camera icon on top */
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #000;
    z-index: 2; /* Bring the camera icon above the pseudo-elements */
  }

  /* Stand */
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 8px;
    background-color: #ccc; /* Light grey stand color */
    border-radius: 0 0 8px 8px; /* Rounded bottom stand corners */
  }
`;
const TheaterSeats = styled.div`
  position: absolute;
  bottom: 15px; /* Adjusted position to place seats below the rental card */
  left: 50%;
  transform: translateX(-50%);
  width: 80%; /* Adjusted width to make three lines of seats */
  height: 60px; /* Adjusted height to create three lines of seats */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SeatLine = styled.div`
  width: 20px;
  height: 20px;
  background-color: #444;
  border-radius: 4px;
`;
const ScreeningCard = styled.div`
  width: 320px;
  height: 350px;
  padding: 20px;
  color: black;
  background: linear-gradient(white, lightpink) padding-box,
    linear-gradient(145deg, transparent 35%, #ffffff) border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  margin: 5px; /* Adjusted margin to create space between the cards */
  position: relative; /* Change the position to relative */
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: left;
  transform-style: preserve-3d; /* Enable 3D transform */
  z-index: 1;

  .main-content {
    flex: 1;
  }

  .header span:first-child {
    font-weight: 600;
    color: #ffffff;
    margin-right: 4px;
  }

  .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
  }

  .categories {
    display: flex;
    gap: 8px;
  }

  .categories span {
    background-color: #222;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .footer {
    font-weight: 600;
    color: #ffffff;
    margin-right: 4px;
  }

  &:hover {
    z-index: 2; /* Bring the hovered card to the front */
    transform: perspective(1000px) rotateY(-15deg); /* Apply the opening book effect on hover */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const CorporateScreeningCard = styled(ScreeningCard)`
  /* Styles for the first card */
  background: linear-gradient(180deg, lightblue 0%, white 100%);
`;

const SocialGroupsCard = styled(ScreeningCard)`
  /* Styles for the second card */
  background: linear-gradient(180deg, lightblue 0%, white 100%);
`;

const MondayFrancoPhoneCard = styled(ScreeningCard)`
  /* Styles for the third card */
  background: linear-gradient(180deg, lightblue 0%, white 100%);
`;

const CorporateScreeningCardContent = () => (
  <div className="card one">
    <div className="cardDetails">
      <h2 className="cardDetailsHeader">Corporate Screening</h2>
      <p>
        Rent the entire auditorium for your clients or employees and make a big impression with the
        latest Hollywood movie. Complement the movie with concessions, a reception, in-theatre
        presentations, and catering before or after the show.
      </p>
    </div>
  </div>
);

const SocialGroupsCardContent = () => (
  <div className="card two">
    <div className="cardDetails">
      <h2 className="cardDetailsHeader">Social Groups</h2>
      <p>
        Looking to celebrate a loved one or make your night a little extra special? Rent out a
        theatre for a private screening of the latest films, or share your favourite classic with
        your loved ones in an auditorium all to yourselves. Pre-order your favourite snacks and
        concession items.
      </p>
    </div>
  </div>
);

const MondayFrancoPhoneCardContent = () => (
  <div className="card three">
    <div className="cardDetails">
      <h2 className="cardDetailsHeader">Monday Franco Phone</h2>
      <p>
        Bring your class out to experience the French language on the big screen. Inquire today for
        more information. At participating theatres only: International Village, Dieppe,
        Fredericton, SC Sudbury, North Bay, SC St. Vital, Miramichi, & Cornwall. Some restrictions
        apply.
      </p>
    </div>
  </div>
);

const TypesOfScreeningsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fallDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const TypesOfScreeningsHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 0.8s ease, ${fallDownAnimation} 1.5s ease;

  &::before {
    content: "🎞️"; /* Movie reel symbol */
    display: block;
    font-size: 32px;
    margin-bottom: 10px;
    animation: ${fadeInAnimation} 0.8s ease; /* Apply the same animation to the symbol */
  }
`;
// Combine the three cards in a container
const TypesOfScreenings = () => {
  return (
    <TypesOfScreeningsContainer>
      <CorporateScreeningCard>
        <CorporateScreeningCardContent />
      </CorporateScreeningCard>
      <SocialGroupsCard>
        <SocialGroupsCardContent />
      </SocialGroupsCard>
      <MondayFrancoPhoneCard>
        <MondayFrancoPhoneCardContent />
      </MondayFrancoPhoneCard>
    </TypesOfScreeningsContainer>
  );
};
const CardButton = styled.button`
  /* Add your CardButton styles here */
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  background: #e91e63;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #d81c60;
    transform: scale(1.1);
  }
`;
const longtermrental = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/parties/inquirenow");
  };
  return (
    <Container>
      <Typography variant="h1" color="darkBlue" textAlign="center">
        Long Term Rentals
      </Typography>
      <Typography variant="subtitle1" color="lightPurple" textAlign="center">
        Celebrate your special moments with us!
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TypesOfScreeningsHeading>Types of Screens</TypesOfScreeningsHeading>
        {/* Use the TypesOfScreenings Heading here */}
        <TypesOfScreenings /> {/* Use the TypesOfScreenings component here */}
      </div>
      <RentalCard>
        <h3>Screening Inquiry</h3>
        <p>Interested in organizing a special screening event?</p>
        <CardButton onClick={handleButtonClick}>Inquire Now</CardButton>
      </RentalCard>
      <TheaterSeats>
        <SeatLine />
        <SeatLine />
        <SeatLine />
      </TheaterSeats>
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
        {/* Add the CardButton component with the Link for redirection */}
        <CardButton onClick={() => navigate("/food")}>Go to Food and Drinks </CardButton>
      </div>
    </Container>
  );
};

export default longtermrental;
