const express = require("express");
const app = express();
require("dotenv").config();
const mongodb = require("./config/mongodb");
const cors = require("cors");
const routes = require("./routes/index");

const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded());
// Routes
app.use("/api", routes);

// Start the server
app.listen(port, async () => {
  await mongodb.connect();
  console.log(`Server running on port ${port}`);
});
