import React from "react";
import MovieOverview from "../../components/MovieDetails/MovieOverview";
import AboutMovie from "../../components/MovieDetails/AboutMovie";
import TopReviews from "../../components/MovieDetails/TopReviews";
import RelatedMovies from "../../components/MovieDetails/RelatedMovies";

const MovieDetail = () => {
  return (
    <>
      <MovieOverview />
      <AboutMovie />
      <TopReviews />
      <RelatedMovies />
    </>
  );
};

export default MovieDetail;
