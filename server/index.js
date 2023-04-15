const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema.js");
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const app = express();
const cors = require("cors");
const Project = require("./models/Project.js");
const Client = require("./models/Client.js");
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `Connected to database: ${conn.connection.host}`.cyan.underline.bold
  );
};

connectToDB();

app.listen(PORT, () => {
  console.log("im working");
});

module.exports = colors;
