const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema.js");
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "production",
  })
);

const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `Connected to database: ${conn.connection.host}`.cyan.underline.bold
  );
};

connectToDB();

const __dirname_1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname_1, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile();
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running successfully!");
  });
}

app.listen(PORT, () => {
  console.log("im working");
});

module.exports = colors;
