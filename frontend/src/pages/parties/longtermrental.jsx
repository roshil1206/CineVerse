import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(() => ({
  margin: "2rem 0",
}));

const RentalCard = styled.div`
  /* Styles for the rental card */
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
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

  &:hover {
    transform: rotate(8deg);
  }

  /* Add styles for the main content of the card */
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
  position: relative; /* Change the position to relative */
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: left;
  transform-style: preserve-3d; /* Enable 3D transform */
  z-index: 1;

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
        your loved ones – in an auditorium all to yourselves. Pre-order your favourite snacks and
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
`;

const TypesOfScreeningsHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin-bottom: 20px;
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
        <TypesOfScreeningsHeading>Types of Screen</TypesOfScreeningsHeading>
        {/* Use the TypesOfScreenings Heading here */}
        <TypesOfScreenings /> {/* Use the TypesOfScreenings component here */}
      </div>

      <RentalCard>
        <h3>Screening Inquiry</h3>
        <p> Interested in organizing a special screening event?</p>
        <CardButton onClick={handleButtonClick}>Inquire Now</CardButton>
      </RentalCard>
      <RentalCard>
        <h3>Class in Session - Education Rentals</h3>
        <p>
          Need more space? Enhance your daytime classes with state-of-the-art audio and visuals.
          Your PowerPoint presentations and videos will have an even greater impact on the big
          screen.
        </p>
        <Link to="/long-term-rentals/education">Learn More</Link>
      </RentalCard>
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
