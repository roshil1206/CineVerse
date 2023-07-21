import React, { useState, useEffect } from "react";
import TheaterCard from "../../components/TheatreSelection/TheatreCard";
import { Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import theme from "../../theme";

export default function TheatreSelection() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const [movie, setMovie] = useState({});
  const [theaters, setTheaters] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    getMovie();
  }, [movieId]);

  const getMovie = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:4000/movie/${movieId}`);
      const movieName = data.data.name;
      setMovie(movieName);
      const { data: tData } = await axios.get(`http://localhost:4000/theatre/${movieId}`);
      setTheaters(tData.data);
      // console.log(tData.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movie:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading || isLoading === null ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Container
            sx={{
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "centre",
              width: "60vw",
              minHeight: "68.6vh",
            }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: theme.palette.darkBlue,
                padding: "25px",
              }}>
              {movie}
            </Typography>
            {theaters?.map((theater, index) => {
              const { showtimes } = theater?.movies?.find((m) => m.id === movieId);
              // console.log(showtimes);
              // console.log(theater);
              return (
                <TheaterCard key={index} theaterName={theater.name} showtimes={showtimes || []} />
              );
            })}
          </Container>
        </>
      )}
    </>
  );
}
