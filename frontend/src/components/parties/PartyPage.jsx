import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Container = styled(Box)(() => ({
  margin: "2rem 0",
}));

const LeftAlignedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align children to the right */
  margin-top: 50px;
`;
const TicketWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: all 0.3s ease;

  /* Custom border for the movie reel effect */
  &::before,
  &::after,
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    background-color: #222;
    border-radius: 50%;
  }

  &::before {
    height: 100%;
    left: -5px;
  }

  &::after {
    height: 40%;
    left: -5px;
    top: 30%;
  }

  &:hover {
    background-color: #f9f2f4;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) rotate(-2deg);
  }

  /* Glowing effect */
  &:after {
    position: absolute;
    content: "";
    top: 5vw;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.75);
    filter: blur(5vw);
    background: linear-gradient(270deg, #0fffc1, #7e0fff);
    background-size: 200% 200%;
    animation: animateGlow 2s ease infinite; /* Increased animation speed */

    @keyframes animateGlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

const TicketHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #222;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  border-radius: 15px 15px 0 0;
  box-shadow: inset 4px 4px 0 0 #fff, inset -4px -4px 0 0 #fff;
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    margin: 0.5rem 0;
  }
`;

const TicketFooter = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #222;
  color: #fff;
  text-align: center;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 4px 4px 0 0 #fff, inset -4px -4px 0 0 #fff;
`;

const CardButton = styled(Link)`
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
const partiespage = () => {
  return (
    <Container>
      <h2>Parties at Cineverse</h2>
      {/* Long Term Rentals */}
      <TicketWrapper>
        <TicketHeader>Long Term Rental</TicketHeader>
        <TicketContent>
          <p>CineVerse is the perfect venue for your next big day</p>
        </TicketContent>
        <TicketFooter>
          <CardButton to="/parties/longtermrental">Inquire</CardButton>
        </TicketFooter>
      </TicketWrapper>

      {/* XSCAPE Arcade Parties */}
      <TicketWrapper>
        <TicketHeader>XSCAPE Arcade</TicketHeader>
        <TicketContent>
          <p>
            Want an epic party that will be talked about for years? Have it at XSCAPE! New Packages
            Coming Soon to an Xscape near you!
          </p>
        </TicketContent>
        <TicketFooter>
          <CardButton to="/parties/xscape">Go to XSCAPE Arcade</CardButton>
        </TicketFooter>
      </TicketWrapper>

      {/* Popcorn Parties */}
      <TicketWrapper>
        <TicketHeader>Popcorn Parties</TicketHeader>
        <TicketContent>
          <p>
            Popcorn Parties are a great way to enjoy your favorite movies with friends and family.
            Our cozy theater rooms and unlimited popcorn make it an unforgettable experience.
          </p>
        </TicketContent>
        <TicketFooter>
          <CardButton to="/parties/popcorn">Go to Popcorn Parties</CardButton>
        </TicketFooter>
      </TicketWrapper>

      {/* More Questions */}
      <LeftAlignedContainer>
        <div className="card-content">
          <h3>More Questions?</h3>
          <p>Visit our FAQ to learn more.</p>
        </div>
        {/* Button */}
        <CardButton to="/faq">Visit FAQ</CardButton>
      </LeftAlignedContainer>
    </Container>
  );
};
export default partiespage;
