const Theatre = require("../../models/TheatreModel");
const response = require("../../utils/response");

const getTheatre = async (req, res) => {
  try {
    const movieId = req.params.id;
    const theatre = await Theatre.find({
      "movieDetails.movie": movieId,
    }).populate(["movieDetails"]);
    // const theatre = await Theatre.find().populate(["movieDetails"]);

    if (!theatre) {
      return response(res, 404, false, { error: "Theatre not found" });
    }

    return response(res, 200, true, theatre);
  } catch (err) {
    return response(res, 500, false, { error: err.message });
  }
};

const saveDataToMongoDB = async (req, res) => {
  try {
    // Sample data
    const data = {
      name: "Theatre 3",
      movieDetails: [
        {
          movie: "64b9a5ca9aa6112a3873f505",
          showtimes: ["9:00 AM", "3:30 PM", "8:00 PM"],
        },
      ],
    };

    // Create a new Theatre document using the Theatre model
    const theatre = new Theatre(data);

    // Save the document to the database
    await theatre.save();
    return response(res, 200, true, theatre);

    console.log("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

module.exports = {
  getTheatre,
  saveDataToMongoDB,
};
