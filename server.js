const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8888;

//express doc hieu data client gui len
app.use(express.json());
//Doc duoc data theo kieu object array
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("SERVER ON");
});

app.listen(port, () => {
  console.log("SERVER IS RUNNING: " + port);
});
