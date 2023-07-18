const mongoose = require("mongoose");

const options = {
  autoIndex: true,
};

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@mycluster.b2n6lft.mongodb.net/mydb?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri, options);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Unable to connect to MongoDB", err);
  }
}

module.exports = {
  connect,
};
