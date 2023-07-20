import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/UI/CustomButton";
import { useSelector } from "react-redux";
import ItemData from "../../components/Summary/ItemData";
import axios from "../../utils/axios";

const Summary = () => {
  const { items } = useSelector((state) => state.cartReducer);

  const [loading, setLoading] = useState(false);

  const getTotal = () => {
    let total = 0;
    items.forEach((entry) => {
      total = total + entry.count * entry.price;
    });
    return total;
  };

  const startCheckout = async () => {
    axios
      .post(
        "/payments/createSesssion",
        { items },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjhkNDMwNDI0YzEyOTkwNmFmZmIwMSIsImlhdCI6MTY4OTgzNTM2MywiZXhwIjoxNjkyNDI3MzYzfQ.Ao4p8ZoVmMkiWqK6cTYKZaanB8nQ8uocZI7sxOM1OPk",
          },
        }
      )
      .then(({ data }) => {
        if (data.data.link) {
          window.location.href = data.data.link;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ marginTop: "70px", padding: "10px" }}>
      <Box
        sx={{
          boxShadow: " 10px 13px 10px -20px #000000",
          width: "100%",
        }}>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: 600,
          }}>
          Order Summary
        </Typography>
        <br />
        {items.map((order, key) => (
          <ItemData order={order} key={key} />
        ))}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}>
          <Typography style={{ fontSize: "18px" }}>
            <b>Total</b>
          </Typography>
          <Typography style={{ fontSize: "18px" }}>
            <b>$ {parseFloat(getTotal()).toFixed(2)}</b>
          </Typography>
        </div>
      </Box>
      <Grid container justifyContent="flex-end">
        <CustomButton
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={() => startCheckout()}>
          Proceed to checkout
        </CustomButton>
      </Grid>
    </div>
  );
};

export default Summary;
