const movieModel = require("../api/models/movieModel");

const getMovie = async (req, res) => {
  try {
    const movie = await movieModel.getMovieById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    return res.json(movie);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getMoviesByGenre = async (req, res) => {
  try {
    const genre = req.params.genre;
    const movies = await movieModel.getMoviesByGenre(genre);
    if (!movies || movies.length === 0) {
      return res
        .status(404)
        .json({ error: "No movies found for the given genre" });
    }
    return res.json(movies);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const addReview = async (req, res) => {
  try {
    const movieId = req.params.id;
    const review = req.body;
    const updatedMovie = await movieModel.addReview(movieId, review);
    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    return res.json(updatedMovie);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getMovie,
  getMoviesByGenre,
  addReview,
};
