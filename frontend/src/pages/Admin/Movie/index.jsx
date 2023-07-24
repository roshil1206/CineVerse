/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import axios from "axios";
import { Container, Button } from "@mui/material";
import styled from "@emotion/styled";
import MovieModal from "../../../components/MovieModal";

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

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Genre", accessor: "genre" },
      { Header: "Rating", accessor: "rating" },
      { Header: "Duration", accessor: "duration" },
    ],
    []
  );

  const fetchMovieData = async () => {
    console.log(`${process.env.REACT_APP_BACKEND_BASE_URL}`);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/movie`);
      setMovieData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (movieData) => {
    try {
      axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/movie/${movieData._id}`);
      fetchMovieData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (data) => {
    setOpen(true);
    setIsUpdate(true);
    setSelectedMovie(data);
  };

  const handleSubmit = async (data) => {
    try {
      if (isUpdate) {
        await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/movie/${data._id}`, data);
      } else {
        await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/movie`, data);
      }
      fetchMovieData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MovieModal
        open={open}
        onClose={() => {
          setOpen(false);
          setIsUpdate(false);
        }}
        isUpdate={isUpdate}
        movieData={selectedMovie}
        onSubmit={handleSubmit}
      />
      <Container justifyContent="center">
        <HeadingWrapper>
          <Heading>Movie Management</Heading>
          <AddButton
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}>
            Add Movie
          </AddButton>
        </HeadingWrapper>
        <TableWrapper>
          <Table
            columns={columns}
            data={movieData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </TableWrapper>
      </Container>
    </>
  );
};

export default Movie;
