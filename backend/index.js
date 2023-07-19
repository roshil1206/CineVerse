const express = require("express");
const mongodb = require("./config/mongodb");
const cors = require("cors");
const routes = require("./api/routes/index");

const app = express();
const port = 3333;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

// Start the server
app.listen(port, async () => {
  await mongodb.connect();
  console.log(`Server running on port ${port}`);
});
