import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import axios from "axios";
import { Container, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import ScreenModal from "../../../components/ScreenModal";

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
  const [screenData, setScreens] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState({});
  const [selectedTheatre, setSelectedTheatre] = useState({});
  const [isTheatreSelected, setTheatreSelected] = useState(false);
  const [formData, setFormData] = React.useState({});

  useEffect(() => {
    fetchMovieData();
    fetchTheatreData();
    fetchScreenData();
  }, []);

  const handleTheatreChange = async (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ [name]: value }));
    setSelectedTheatre(theatres.filter((theatre) => theatre._id === value)[0]);

    var { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen`);
    setScreens(data.data.filter((screen) => screen.theatre._id === value));

    var mList = [];
    data.data
      .filter((screen) => screen.theatre._id === value)
      .forEach((screen) => {
        mList.push(screen.movie._id);
      });
    setMovieList(mList);
    fetchMovieData();
    setTheatreSelected(true);
  };

  const columns = React.useMemo(
    () => [
      { Header: "Movie", accessor: "movie.name" },
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
      setScreens(data.data.filter((screen) => screen.theatre._id === selectedTheatre._id));

      var mList = [];
      data.data
        .filter((screen) => screen.theatre._id === selectedTheatre._id)
        .forEach((screen) => {
          mList.push(screen.movie._id);
        });
      setMovieList(mList);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTheatreData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre`);
      setTheatres(data.data);
      setSelectedTheatre(data.data.filter((theatre) => theatre._id === selectedTheatre?._id)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (data) => {
    try {
      axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen/${data._id}`);
      axios.delete(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre/${selectedTheatre._id}/${data.movie._id}`
      );
      fetchScreenData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (data) => {
    setOpen(true);
    setIsUpdate(true);
    const curScreen = screenData.filter((screen) => screen.movie._id === data.movie._id)[0];
    setSelectedScreen({
      _id: curScreen._id,
      movie: curScreen.movie._id,
      price: curScreen.price,
      showTimes: selectedTheatre.movieDetails.filter(
        (movieDetail) => movieDetail.movie._id === curScreen.movie._id
      )[0].showTimes,
    });
  };

  const handleSubmit = async (data) => {
    const screenPayload = {
      movie: data.movie,
      price: data.price,
      theatre: selectedTheatre._id,
    };
    const theatrePayload = {
      movieDetail: {
        movie: data.movie,
        showTimes: data.showTimes,
      },
    };
    try {
      if (isUpdate) {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen/${data._id}`,
          screenPayload
        );
      } else {
        await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/screen`, screenPayload);
      }
      await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/theatre/${selectedTheatre._id}/addMovie`,
        theatrePayload
      );
      fetchScreenData();
      fetchTheatreData();
      fetchMovieData();
      setSelectedTheatre(theatres.filter((theatre) => theatre._id === selectedTheatre._id)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ScreenModal
        open={open}
        onClose={() => {
          setOpen(false);
          setIsUpdate(false);
        }}
        isUpdate={isUpdate}
        screenData={selectedScreen}
        movies={isUpdate ? movies : movies.filter((movie) => movieList.indexOf(movie._id) === -1)}
        onSubmit={handleSubmit}
      />
      <Container justifyContent="center">
        <HeadingWrapper>
          <Heading>Screen Management</Heading>
          <AddButton
            variant="contained"
            color="primary"
            disabled={!isTheatreSelected}
            onClick={() => {
              setOpen(true);
            }}>
            Add Screen
          </AddButton>
        </HeadingWrapper>
        <FormControl fullWidth margin="normal">
          <InputLabel>Theatre</InputLabel>
          <Select
            label="Theatre"
            name="theatre"
            value={formData.theatre || ""}
            onChange={handleTheatreChange}>
            {theatres.map((theatre) => (
              <MenuItem key={theatre.name} value={theatre._id}>
                {theatre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableWrapper>
          <Table
            columns={columns}
            data={screenData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </TableWrapper>
      </Container>
    </>
  );
};

export default Theatre;
