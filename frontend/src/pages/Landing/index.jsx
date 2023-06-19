import React from "react";
import CurrentMovieBanner from "../../components/Landing/CurrentMovieBanner";
import MovieList from "../../components/Landing/MovieList";
import movie1 from "../../assets/images/movie1.jpg";
import movie2 from "../../assets/images/movie2.jpg";
import movieA from "../../assets/images/movieA.jpg";
import movieB from "../../assets/images/movieB.jpg";
import movieC from "../../assets/images/movieC.jpg";

export default function Landing() {

  const rotatingMovies = [
    {
      title: "Movie A",
      description: "This is the description of Movie A",
      backgroundImage: movieA,
    },
    {
      title: "Movie B",
      description: "This is the description of Movie B.",
      backgroundImage: movieB,
    },
    {
      title: "Movie C",
      description: "This is the description of Movie C.",
      backgroundImage: movieC,
    },
  ];

  const recommendedMovies = [
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    { id: 1, title: "Movie 1", genre: "Action", poster: movie1 },
    // Add more recommended movies
  ];

  const upcomingMovies = [
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    { id: 1, title: "Movie A", genre: "Drama", poster: movie2 },
    // Add more upcoming movies
  ];

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
