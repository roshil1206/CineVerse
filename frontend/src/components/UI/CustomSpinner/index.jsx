import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import React from "react";

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: `${theme.palette.secondary.main} !important`,
  margin: "10px",
}));

const index = ({ props }) => {
  return <StyledCircularProgress {...props} />;
};

export default index;
