const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

let moviesCollection;

async function connectToDB() {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;

  const uri = `mongodb+srv://${username}:${encodeURIComponent(
    password
  )}@cluster.9qbrhbc.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("CSCI-5709");
    moviesCollection = db.collection("movies");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

function getMoviesCollection() {
  return moviesCollection;
}

module.exports = {
  connectToDB,
  getMoviesCollection,
};
