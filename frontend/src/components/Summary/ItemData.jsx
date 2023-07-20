import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateItemAction } from "../../store/Cart/actionTypes";
import { CiCirclePlus } from "react-icons/ci";
import PlusMinus from "../UI/PlusMinus/PlusMinus";

const styles = {
  hr: {
    borderBottom: "1px solid #696969",
    width: "100%",
    marginTop: "10px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: "100px",
    width: "100px",
    marginRight: "20px",
  },
  cont1: {
    display: "flex",
    alignItems: "center",
  },

  cont3: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  incDecButton: {
    border: "none",
    background: "none",
    fontSize: "20px",
    color: "#07776d",
    marginRight: "5px",
    cursor: "pointer",
  },
};

const Container = styled(Box)(() => ({
  padding: "10px",
}));

const ItemData = ({ order }) => {
  const dispatch = useDispatch();
  const increaseCount = (order) => {
    dispatch(updateItemAction({ ...order, count: order.count + 1 }));
  };

  const decreaseCount = (order) => {
    dispatch(updateItemAction({ ...order, count: order.count - 1 }));
  };

  return (
    <Container>
      <div style={styles.item}>
        <div style={styles.cont1}>
          <img src={order.imageUrl} alt={order.name} style={styles.img} />
          <div>
            <Typography variant="body1">{order.name}</Typography>
            <PlusMinus
              decreaseCount={() => decreaseCount(order)}
              count={order.count}
              increaseCount={() => increaseCount(order)}
            />
          </div>
        </div>
        <div style={styles.cont3}>
          <Typography variant="body1">
            $ {order.price} x {order.count} <br />
            <b>$ {parseFloat(order.price * order.count).toFixed(2)}</b>
          </Typography>
        </div>
      </div>

      <div style={styles.hr} />
    </Container>
  );
};

export default ItemData;
