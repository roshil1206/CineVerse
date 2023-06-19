import React from "react";
import CurrentMovieBanner from "../../components/Landing/CurrentMovieBanner";
import MovieList from "../../components/Landing/MovieList";
import movie1 from "../../assets/images/movie1.jpg";
import movie2 from "../../assets/images/movie2.jpg";
import movie3 from "../../assets/images/movie3.jpg";
import movie4 from "../../assets/images/movie4.jpg";
import movie5 from "../../assets/images/movie5.jpg";
import movie6 from "../../assets/images/movie6.jpg";
import movie7 from "../../assets/images/movie7.jpg";
import movie8 from "../../assets/images/movie8.jpg";
import movie9 from "../../assets/images/movie9.jpg";
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
    { id: 1, title: "Movie 2", genre: "Romance", poster: movie2 },
    { id: 1, title: "Movie 3", genre: "Horror", poster: movie3 },
    { id: 1, title: "Movie 4", genre: "Thriller", poster: movie4 },
    { id: 1, title: "Movie 5", genre: "Action", poster: movie5 },
    { id: 1, title: "Movie 6", genre: "Mystery", poster: movie6 },
  ];

  const upcomingMovies = [
    { id: 1, title: "Movie 7", genre: "Drama", poster: movie7 },
    { id: 1, title: "Movie 8", genre: "Comedy", poster: movie8 },
    { id: 1, title: "Movie 9", genre: "Action", poster: movie9 },
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
