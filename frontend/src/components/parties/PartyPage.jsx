/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Slider from "react-slick";

const Container = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
}));

const LeftAlignedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align children to the right */
  margin-top: 50px;
`;
const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 50px auto;
  border: 3px solid #000;
  border-radius: 15px; /* Increased to give a ticket-like appearance */
  overflow: hidden; /* To hide any overflowing content inside the ticket */
`;

const TicketHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  border-radius: 15px 15px 0 0; /* Adjusted to cut semicircle on the top */
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;

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
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 0 0 15px 15px; /* Adjusted to cut semicircle on the bottom */
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
          <ul>
            <li>Location: 21 street</li>
            <li>Tickets No. : 120</li>
            <li>Earnings: 500$</li>
          </ul>
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
