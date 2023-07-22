const Theatre = require("../../models/TheatreModel");
const response = require("../../utils/response");

const getTheatre = async (req, res) => {
  try {
    const movieId = req.params.id;
    const theatre = await Theatre.find({ "movies.id": movieId });
    // const theatre = await Theatre.find();

    if (!theatre) {
      return response(res, 404, false, { error: "Theatre not found" });
    }

    return response(res, 200, true, theatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

module.exports = {
  getTheatre,
};
