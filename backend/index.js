const express = require("express");
const { connectToDB } = require("./mongo/config");
const cors = require("cors");
const movieRoutes = require("./api/views/movieView");

const app = express();
const port = 3333;

// Connect to MongoDB
connectToDB();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/movies", movieRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
