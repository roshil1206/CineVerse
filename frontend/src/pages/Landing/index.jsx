import React from "react";
import CurrentMovieBanner from "../../components/Landing/CurrentMovieBanner";
import MovieList from "../../components/Landing/MovieList";
import { movies, rotatingMovies } from "../../mock";

export default function Landing() {
  const recommendedMovies = movies.slice(0, 6);

  const upcomingMovies = movies.slice(6, 9);

  return (
    <div className="Landing">
      <div className="body-content">
        <CurrentMovieBanner movies={rotatingMovies} />
        <MovieList title="Current Movies" movies={recommendedMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
}
