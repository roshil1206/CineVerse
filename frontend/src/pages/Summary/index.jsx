import React from "react";
import { Box, Card, Grid, Typography, styled } from "@mui/material";
import CustomButton from "../../components/UI/CustomButton";
import { useSelector } from "react-redux";
import ItemData from "../../components/Summary/ItemData";
import axios from "../../utils/axios";

const styles = {
  box: {
    "&.MuiBox-root": {
      padding: "5rem 0",
    },
  },
};

const Container = styled(Box)(() => ({
  minHeight: "calc(100vh - 48px)",
  padding: "10px",
}));

const CustomCard = styled(Card)(() => ({
  padding: "10px",
}));

const Summary = () => {
  const { items } = useSelector((state) => state.cartReducer);

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
    <Container>
      <Box sx={styles.box}>
        <Typography variant="h1" color="darkBlue" textAlign="center">
          Order Summary
        </Typography>
      </Box>
      <CustomCard>
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
          <Typography variant="h3">
            <b>Total</b>
          </Typography>
          <Typography variant="h3">
            <b>$ {parseFloat(getTotal()).toFixed(2)}</b>
          </Typography>
        </div>
      </CustomCard>

      <Grid container justifyContent="flex-end">
        <CustomButton
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={() => startCheckout()}>
          Proceed to checkout
        </CustomButton>
      </Grid>
    </Container>
  );
};

export default Summary;
