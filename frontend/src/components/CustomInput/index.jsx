import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
}));

const CustomInput = (props) => {
  return <StyledInput variant="standard" {...props} />;
};

export default CustomInput;
