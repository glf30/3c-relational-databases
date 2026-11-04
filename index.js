
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

const connectToMongoDB = require("./database/connectToMongoDB");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}...`);

  connectToMongoDB();
});
