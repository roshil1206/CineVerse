const { ObjectId } = require("mongodb");
const { getMoviesCollection } = require("../../mongo/config");

// Function to fetch a movie by ID
const getMovieById = async (id) => {
  try {
    return getMoviesCollection().findOne({ _id: new ObjectId(id) });
  } catch (err) {
    throw err;
  }
};

// Function to fetch movies by genre
const getMoviesByGenre = async (genre) => {
  try {
    return getMoviesCollection().find({ genre }).toArray();
  } catch (err) {
    throw err;
  }
};

// Function to add a review to a movie
const addReview = async (movieId, review) => {
  try {
    const reviewBody = {
      reviewerName: review?.reviewerName || null,
      rating: review?.rating || null,
      review: review?.review || null,
    };

    if (
      reviewBody.reviewerName === null ||
      reviewBody.rating === null ||
      reviewBody.review === null
    ) {
      throw "Review fields cannot be null";
    }

    const resp = await getMoviesCollection().findOneAndUpdate(
      { _id: new ObjectId(movieId) },
      { $push: { topReviews: reviewBody } },
      { returnDocument: "after" }
    );
    return resp.value;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getMovieById,
  getMoviesByGenre,
  addReview,
};
