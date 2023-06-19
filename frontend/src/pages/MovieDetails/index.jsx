import React from "react";
import MovieOverview from "../../components/MovieDetails/MovieOverview";
import AboutMovie from "../../components/MovieDetails/AboutMovie";
import TopReviews from "../../components/MovieDetails/TopReviews";
import RelatedMovies from "../../components/MovieDetails/RelatedMovies";
import { useSearchParams } from "react-router-dom";
import { movies } from "../../mock";

const MovieDetail = () => {
  const [SearchParams] = useSearchParams();
  const movieId = SearchParams.get("id");
  const movie = movies.find((movie) => movie.id === +movieId);

  return (
    <>
      <MovieOverview data={movie} />
      <AboutMovie description={movie.description} />
      <TopReviews reviews={movie.topReviews} />
      <RelatedMovies currentMovie={movie} movies={movies} />
    </>
  );
};

export default MovieDetail;
