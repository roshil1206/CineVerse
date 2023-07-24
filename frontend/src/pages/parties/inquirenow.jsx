import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)(() => ({
  margin: "2rem 0",
}));

const inquirenow = () => {
  // const [showMessage, setShowMessage] = useState(false);

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   groupName: "",
  //   email: "",
  //   phone: "",
  //   eventType: "",
  //   groupType: "",
  //   theatreProvince: "",
  //   theatreCity: "",
  //   preferredTheatre: "",
  //   preferredDate: "",
  //   alternateDate: "",
  //   startTime: "",
  //   numGuests: "",
  //   howHeard: "",
  //   otherHowHeard: "",
  //   requireFoodOptions: false,
  //   eventDetails: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   // Update the formData state here
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   setShowMessage(true);
  // };

  return (
    <>
      <Container>
        {/* Main Content */}
        <Typography variant="h1" color="darkBlue" textAlign="center">
          Inquire Now
        </Typography>

        {/* Your Details */}
        <Typography variant="h2" color="darkBlue" textAlign="center">
          Your Details
        </Typography>
        <form>
          <label>
            First Name *
            <input
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleInputChange}
              required
            />
          </label>

          {/* Event Details */}
          <Typography variant="h2" color="darkBlue" textAlign="center">
            Event Details
          </Typography>
          {/* Add input fields for event details, such as eventType, groupType, theatreProvince, etc. */}
          {/* ... */}

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>

        {/* Message Box */}
        {/* {showMessage && (
          <Typography variant="body1" color="darkBlue" textAlign="center">
            Thank you for your inquiry! We have received your query. We will let you know if we have
            any bookings available.
          </Typography>
        )} */}
      </Container>
    </>
  );
};

export default inquirenow;
