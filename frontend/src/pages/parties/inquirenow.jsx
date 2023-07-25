import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Cookies from "js-cookie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const SubmitButton = styled.button`
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
// const SuccessMessage = styled.div`
//   color: green;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;
const inquirenow = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    groupName: "",
    email: "",
    phone: "",
    groupType: "",
    theatreProvince: "",
    theatreCity: "",
    preferredTheatre: "",
    preferredDate: "",
    alternateDate: "",
    startTime: "",
    numGuests: "",
    howHeard: "",
    otherHowHeard: "",
    requireFoodOptions: false,
    eventDetails: "",
    subscribeNewsletter: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const submitForm = (formData) => {
    return new Promise((resolve, reject) => {
      try {
        const token = Cookies.get("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        axios
          .post("http://localhost:4000/api/inquirenow", formData, {
            headers,
          })
          .then((response) => {
            console.log(response.data);
            // Update the state or show a success message to the user if needed
            resolve(response.data);
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            // Handle the error or show an error message to the user if needed
            reject(error);
          });
      } catch (error) {
        console.error("Error submitting form:", error);
        reject(error);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the formData to the server or database here using the submitForm function
    submitForm(formData)
      .then(() => {
        // Reset the form data after successful form submission to the initial values
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => Object.assign({}, prevFormData, { [name]: inputValue }));
  };

  return (
    <Container>
      <h1>Inquire Now</h1>
      <Form onSubmit={handleSubmit}>
        <h2>Your Details</h2>
        <FormGroup>
          <Label>First Name *</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name *</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Group Name *</Label>
          <Input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone *</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <h2>Event Details</h2>
        <FormGroup>
          <Label>Group Type *</Label>
          <Input
            type="text"
            name="groupType"
            value={formData.groupType}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Theatre Province *</Label>
          <Input
            type="text"
            name="theatreProvince"
            value={formData.theatreProvince}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Theatre City *</Label>
          <Input
            type="text"
            name="theatreCity"
            value={formData.theatreCity}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Preferred Theatre *</Label>
          <Input
            type="text"
            name="preferredTheatre"
            value={formData.preferredTheatre}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Preferred Date *</Label>
          <Input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Alternate Date</Label>
          <Input
            type="date"
            name="alternateDate"
            value={formData.alternateDate}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Start Time *</Label>
          <Input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Number of Guests *</Label>
          <Input
            type="number"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>How did you hear about us? *</Label>
          <Input
            type="text"
            name="howHeard"
            value={formData.howHeard}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Please specify where you heard about us *</Label>
          <Input
            type="text"
            name="otherHowHeard"
            value={formData.otherHowHeard}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <h2>Tell us more about your event</h2>
        <FormGroup>
          <TextArea
            rows={6}
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleInputChange}
            placeholder="Please type details here..."
            required
          />
        </FormGroup>
        <Form onSubmit={handleSubmit}>
          {/* {submissionStatus === "success" && (
            <SuccessMessage>Your inquiry has been submitted successfully</SuccessMessage>
          )} */}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Form>
    </Container>
  );
};

export default inquirenow;
