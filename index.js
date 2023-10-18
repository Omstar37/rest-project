const express = require("express");
const mongoose = require("mongoose");
const router = require('./users/routes.config')

const app = express();
const port = 3333;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/bfl", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
