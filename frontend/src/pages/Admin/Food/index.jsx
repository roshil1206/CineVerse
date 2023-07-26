import { Box, Chip, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CustomButton from "../../../components/UI/CustomButton";
import { MDBDataTableV5 } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActivationStateAction,
  deleteFoodItem,
  getFoodItemsAction,
} from "../../../store/FoodAndBeverages/actions";
import CustomSpinner from "../../../components/UI/CustomSpinner";
import FoodModal from "../../../components/FoodModal";

const Container = styled(Box)(() => ({
  padding: "20px",
  marginTop: "2rem",
}));

const Colums = [
  {
    label: "Name",
    field: "name",
  },
  {
    label: "Description",
    field: "description",
  },
  { label: "Type", field: "type" },
  {
    label: "Price",
    field: "price",
  },
  {
    label: "Status",
    field: "isActive",
  },
  {
    label: "Action",
    field: "action",
  },
];

const index = () => {
  const dispatch = useDispatch();

  const { foodItems, loading } = useSelector((state) => state.foodReducer);

  const [showAddCard, setShowAddCard] = useState(false);
  const [updateItem, setUpdateItem] = useState();

  const handleActivationChange = (item) => {
    dispatch(changeActivationStateAction({ id: item._id, status: `${!item.isActive}` }));
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteFoodItem(item._id));
  };

  const handleUpdateItem = (item) => {
    setUpdateItem(item);
    setShowAddCard(true);
  };

  const getFoodItems = useMemo(() => {
    const data = foodItems.map((item) => ({
      ...item,
      type: item?.category?.charAt(0)?.toUpperCase() + item?.category?.slice(1),
      isActive: item.isActive ? (
        <Chip label="Active" color="success" />
      ) : (
        <Chip label="Inactive" color="error" />
      ),
      action: (
        <Grid container spacing={2}>
          <Grid item>
            <CustomButton
              variant="outlined"
              onClick={() => handleActivationChange(item)}
              color={item.isActive ? undefined : "success"}>
              {item.isActive ? "Deactivate" : "Activate"}
            </CustomButton>
          </Grid>
          <Grid item>
            <CustomButton variant="outlined" color="info" onClick={() => handleUpdateItem(item)}>
              Update
            </CustomButton>
          </Grid>
          <Grid item>
            <CustomButton variant="outlined" color="error" onClick={() => handleDeleteItem(item)}>
              Delete
            </CustomButton>
          </Grid>
        </Grid>
      ),
    }));
    return data;
  }, [foodItems]);

  useEffect(() => {
    dispatch(getFoodItemsAction());
  }, [dispatch]);

  return (
    <Container>
      <FoodModal
        open={showAddCard}
        onClose={() => setShowAddCard(false)}
        loading={loading}
        setUpdateItem={setUpdateItem}
        updateItem={updateItem}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{ marginBottom: "1rem" }}>
        <Typography variant="h2" color="secondary">
          Food And Beverages
        </Typography>
        <CustomButton variant="contained" onClick={() => setShowAddCard(true)}>
          ADD ITEM
        </CustomButton>
      </Grid>

      {loading ? (
        <CustomSpinner center />
      ) : (
        <MDBDataTableV5
          bordered
          responsive
          hover
          displayEntries={false}
          entries={10}
          pagesAmount={4}
          data={{ columns: Colums, rows: getFoodItems }}
          fullPagination
        />
      )}
    </Container>
  );
};

export default index;
