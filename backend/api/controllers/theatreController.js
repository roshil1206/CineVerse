const Theatre = require("../../models/TheatreModel");
const response = require("../../utils/response");

const getTheatre = async (req, res) => {
  try {
    const movieId = req.params.id;
    const theatre = await Theatre.find({
      "movieDetails.movie": movieId,
    }).populate(["movieDetails"]);

    if (!theatre) {
      return response(res, 404, false, { error: "Theatre not found" });
    }

    return response(res, 200, true, theatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

// Admin Controller
const addTheatre = async (req, res) => {
  try {
    const theatreData = req.body;
    const theatre = new Movie(theatreData);
    const savedtheatre = await theatre.save();
    return response(res, 201, true, savedtheatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

const getAllTheatre = async (req, res) => {
  try {
    const theatres = await Theatre.find().populate(["movieDetails"]);
    return response(res, 200, true, theatres);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

const updateTheatre = async (req, res) => {
  try {
    const theatreId = req.params.id;
    const theatreData = req.body;
    const theatre = await Theatre.findByIdAndUpdate(theatreId, theatreData, {
      new: true,
    }).populate(["movieDetails"]);

    if (!theatre) {
      return response(res, 404, false, { error: "Movie not found" });
    }

    return response(res, 200, true, theatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

const deleteTheatre = async (req, res) => {
  try {
    const theatreId = req.params.id;
    const theatre = await Theatre.findByIdAndDelete(theatreId).populate(["movieDetails"]);

    if (!theatre) {
      return response(res, 404, false, { error: "Movie not found" });
    }

    return response(res, 200, true, theatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

module.exports = {
  getTheatre,
  addTheatre,
  getAllTheatre,
  updateTheatre,
  deleteTheatre,
};
