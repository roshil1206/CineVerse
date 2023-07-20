import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "../../utils/axios";
import CustomButton from "../../components/UI/CustomButton";
import { Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    fontFamily: "'Red Hat Display', sans-serif",
    backgroundColor: "white",
    borderRadius: 20,
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
    maxWidth: 450,
    margin: "auto",
    textAlign: "center",
    padding: "30px",
  },
  title: {
    color: "hsl(223, 47%, 23%)",
    fontWeight: 900,
    fontSize: 26,
  },
  summary: {
    lineHeight: 1.5,
    color: "rgba(153, 153, 153, 0.979)",
    fontSize: 15,
  },
  plan: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "hsl(225, 100%, 98%)",
    borderRadius: 15,
    margin: 13,
    padding: 23,
    justifyContent: "space-between",
  },
  orderName: {
    fontWeight: 900,
    color: "hsl(223, 47%, 23%)",
  },
  orderPrice: {
    color: "rgba(153, 153, 153, 0.979)",
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: "hsl(245, 75%, 52%)",
    color: "white",
    borderRadius: 15,
    fontWeight: 500,
    boxShadow: "8px 15px 20px hsla(245, 75%, 52%, 0.329)",
  },
  cancelButton: {
    color: "rgba(153, 153, 153, 0.979)",
    fontWeight: 800,
  },
});

const Success = () => {
  const { search } = useLocation();
  const sessionId = search.split("=")[1];

  const [orderDetails, setorderDetails] = useState();

  useEffect(() => {
    axios
      .post(
        "/payments/success",
        { sessionId },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjhkNDMwNDI0YzEyOTkwNmFmZmIwMSIsImlhdCI6MTY4OTgzNTM2MywiZXhwIjoxNjkyNDI3MzYzfQ.Ao4p8ZoVmMkiWqK6cTYKZaanB8nQ8uocZI7sxOM1OPk",
          },
        }
      )
      .then(({ data }) => {
        if (data.success) {
          setorderDetails(data.data.paymentData);
        }
      });
  }, [sessionId]);

  const classes = useStyles();

  // Other existing code

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Order Summary</Typography>
      <Typography className={classes.summary}>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
        like!
      </Typography>
      {/* {summaryData.map((order) => (
        <div className={classes.plan}>
          <img src={order.image} alt={order.name} />
          <div>
            <Typography className={classes.orderName}>{order.name}</Typography>
            <Typography className={classes.orderPrice}>
              $ {parseFloat(order.price).toFixed(2)}
            </Typography>
          </div>
          <button onClick={() => decreaseCount(order)}>Change</button>
        </div>
      ))} */}
      <div>
        <CustomButton
          className={classes.proceedButton}
          variant="contained"
          color="success"
          sx={{ marginTop: "10px" }}>
          Proceed to checkout
        </CustomButton>
        <button className={classes.cancelButton}>Cancel Order</button>
      </div>
    </div>
  );
};

export default Success;
