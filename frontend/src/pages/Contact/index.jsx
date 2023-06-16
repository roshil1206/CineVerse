import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const styles = {
  box: {
    "&.MuiBox-root": {
      padding: "5rem 0",
    },
  },
  container1Section2: {
    marginTop: "5rem",
  },
};

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  margin: "0 3rem",
  padding: "10px",
  borderRadius: 5,
}));

const Container1 = styled(Box)(({ theme }) => ({
  background: "linear-gradient(90deg, rgba(62,32,147,1) 0%, rgba(66,32,163,1) 16%)",
  borderRadius: 5,
  padding: "2rem",
  color: theme.palette.white,
}));

const Container2 = styled(Box)(({ theme }) => ({
  padding: "2rem",
}));

const ContactInfoContainer = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
  "& svg": {
    fontSize: "20px",
    marginRight: "15px",
    color: theme.palette.pink2,
  },
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  "& svg": {
    fontSize: "20px",
    color: theme.palette.white,
  },
  "& .round": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    width: "30px",
    borderRadius: "50px",
    border: `1px solid ${theme.palette.white}`,
    marginRight: "15px",
  },

  "& .round:hover": {
    border: `1px solid ${theme.palette.pink2}`,
    backgroundColor: theme.palette.pink2,
    cursor: "pointer",
  },
}));

const contactInfo = [
  { Icon: FaPhoneAlt, info: "+1 123 123 1234" },
  { Icon: MdEmail, info: "help@cineverse.com" },
  { Icon: MdLocationPin, info: "1333 South Park St, Halifax B3J2K9" },
];

const socialIcons = [
  { Icon: FaInstagram, link: "" },
  { Icon: FaFacebookF, link: "" },
  { Icon: FaTwitter, link: "" },
  { Icon: FaLinkedinIn, link: "" },
];

const inputFields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "phone" },
];

const Contact = () => {
  return (
    <div>
      <Box sx={styles.box}>
        <Typography variant="h1" color="darkBlue" textAlign="center">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="lightPurple" textAlign="center">
          Any question? Just write us a message!
        </Typography>
      </Box>
      <ContentContainer>
        <Grid container>
          <Grid item md={5}>
            <Container1>
              <Typography variant="h3" style={{ marginBottom: "15px" }}>
                Contact Information
              </Typography>
              <Typography variant="subtitile2">
                Please fill the form, our team will get back to you within 24 hours.
              </Typography>
              <div style={styles.container1Section2}>
                {contactInfo.map((data, key) => (
                  <ContactContainer Icon={data.Icon} info={data.info} key={key} />
                ))}{" "}
              </div>
              <SocialMediaContainer>
                <Grid container>
                  {socialIcons.map((Data, key) => (
                    <div className="round" key={key}>
                      <Data.Icon />
                    </div>
                  ))}
                </Grid>
              </SocialMediaContainer>
            </Container1>
          </Grid>
          <Grid item md={7}>
            <Container2>
              <Grid container justifyContent="space-between">
                {inputFields.map((field, key) => (
                  <Grid item sm={5} key={key}>
                    <CustomInput {...field} />
                  </Grid>
                ))}
              </Grid>
              <Grid item xm={12}>
                <CustomInput label="Message" multiline={true} minRows={3} maxRows={4} />
              </Grid>
              <Grid container justifyContent="flex-end">
                <CustomButton variant="contained" color="secondary" style={{ marginTop: "20px" }}>
                  Send Message
                </CustomButton>
              </Grid>
            </Container2>
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
};

const ContactContainer = ({ Icon, info }) => (
  <ContactInfoContainer>
    <Grid container alignItems="center">
      <Icon style={styles.icon} />
      <Typography variant="body1">{info}</Typography>
    </Grid>
  </ContactInfoContainer>
);

export default Contact;
