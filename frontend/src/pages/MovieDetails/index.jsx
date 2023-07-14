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
  // const movie = movies.find((movie) => movie.id === +movieId);

  useEffect(() => {
    getMovie();
  }, [movieId]);

  const getMovie = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:3333/movies/${movieId}`);
      const { data: relatedMovieData } = await axios.get(
        `http://localhost:3333/movies/genre/${data.genre}`
      );
      setMovie(data);
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
          <TopReviews reviews={movie?.topReviews} />
          <RelatedMovies relatedMovies={relatedMovies} />
        </>
      )}
    </>
  );
};

export default MovieDetail;
