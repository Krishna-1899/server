const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/connection");
const userRoutes = require("./route/contact");
var cors = require("cors");
const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.BASE_URL;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: "*",
  })
);

app.use(`/api/v1`, userRoutes);

connection();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
  console.log(`Base URL: ${BASE_URL}`);
});
