import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

import MovieOverview from "../../components/MovieDetails/MovieOverview";
import AboutMovie from "../../components/MovieDetails/AboutMovie";
import TopReviews from "../../components/MovieDetails/TopReviews";
import RelatedMovies from "../../components/MovieDetails/RelatedMovies";

const MovieDetail = () => {
  const [searchParams] = useSearchParams();
  const [movie, setMovie] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const movieId = searchParams.get("id");

  useEffect(() => {
    getMovie();
  }, [movieId]);

  const updateMovie = (updatedMovie) => {
    setMovie(updatedMovie);
  };

  const getMovie = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:3333/movie/${movieId}`);
      const movieData = data.data;

      const resp = await axios.get(`http://localhost:3333/movie/genre/${movieData.genre}`);
      const relatedMovieData = resp.data.data;

      setMovie(movieData);
      setRelatedMovies(relatedMovieData);
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
          <MovieOverview data={movie} />
          <AboutMovie description={movie?.description} />
          <TopReviews reviews={movie?.topReviews} id={movie._id} updateMovie={updateMovie} />
          <RelatedMovies relatedMovies={relatedMovies} />
        </>
      )}
    </>
  );
};

export default MovieDetail;
