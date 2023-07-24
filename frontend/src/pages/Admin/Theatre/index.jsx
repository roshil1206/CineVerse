import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import axios from "axios";
import { Container, Button } from "@mui/material";
import styled from "@emotion/styled";
import TheatreModal from "../../../components/TheatreModal";

const Heading = styled("h1")({
  fontSize: "24px",
  fontWeight: "bold",
});

const HeadingWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  marginTop: "1rem",
});

const TableWrapper = styled("div")({
  width: "100%",
  border: "1px solid #ddd",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1rem",
  padding: "1rem",
});

const AddButton = styled(Button)({
  marginLeft: "1rem",
});

const Theatre = () => {
  const [theatreData, setTheatres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState({});

  useEffect(() => {
    fetchMovieData();
    fetchTheatreData();
    fetchScreenData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Movie", accessor: "movieDetails.name" },
      { Header: "Price", accessor: "price" },
    ],
    []
  );

  const fetchMovieData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/movie`);
      setMovies(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchScreenData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen`);
      setScreens(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTheatreData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre`);
      setTheatres(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (theatreData) => {
    try {
      axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre/${theatreData._id}`);
      screens.forEach(async (screen) => {
        if (screen.theatre === theatreData._id) {
          await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen/${screen._id}`
          );
        }
      });
      fetchTheatreData();
      fetchScreenData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (data) => {
    setOpen(true);
    setIsUpdate(true);
    setSelectedTheatre(data);
  };

  const handleSubmit = async (theatreData) => {
    try {
      if (isUpdate) {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre/${theatreData._id}`,
          { ...theatreData, movieDetails: theatreData.movieDetails._id }
        );

        screens.forEach(async (screen) => {
          if (screen.theatre === theatreData._id) {
            await axios.put(
              `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen/${screen._id}`,
              { movie: theatreData.movieDetails._id, price: theatreData.price }
            );
          }
        });
      } else {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre`,
          theatreData
        );
        await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen`, {
          movie: theatreData.movieDetails,
          theatre: data.data._id,
          price: theatreData.price,
        });
      }
      fetchTheatreData();
      fetchScreenData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TheatreModal
        open={open}
        onClose={() => {
          setOpen(false);
          setIsUpdate(false);
        }}
        isUpdate={isUpdate}
        theatreData={selectedTheatre}
        movies={movies}
        onSubmit={handleSubmit}
      />
      <Container justifyContent="center">
        <HeadingWrapper>
          <Heading>Theatre Management</Heading>
          <AddButton
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}>
            Add Theatre
          </AddButton>
        </HeadingWrapper>
        <TableWrapper>
          <Table
            columns={columns}
            data={theatreData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </TableWrapper>
      </Container>
    </>
  );
};

export default Theatre;
