const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config()
const app = express();
const cors = require('cors');
const prefix = '/mongo'
app.use(cors({
    origin: '*'
}));


app.use(express.json());
mongoose.connect(
  `${process.env.DB_URL}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Server Connected successfully");
});

//---- ROUTER IMPORTS ------
const experts_router = require("./routes/experts_router")

//---- ROUTER APP USE IMPLEMENTATION ------

app.use(`${prefix}/experts`,experts_router);


app.listen(3061, () => {
  console.log("Server is running at port 3061");
});

