// const { ObjectId } = require("mongodb");
const { getMoviesCollection } = require("../../mongo/config");

// Function to fetch current movies
const getMovies = async () => {
  try {
    return getMoviesCollection().find({}).toArray();
  } catch (err) {
    throw err;
  }
};

module.exports = { getMovies };
