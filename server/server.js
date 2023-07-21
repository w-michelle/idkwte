const express = require("express");
const app = express();

const cors = require("cors");

const config = require("dotenv").config();

app.use(cors());

app.get("/api/:city", (req, res) => {
  const category = req.query.category;
  const { city } = req.params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };
  const url = `https://api.yelp.com/v3/businesses/search?location=${city}&categories=${category}&sort_by=best_match&limit=20`;
  fetch(url, options)
    .then((response) => response.json())
    .then((jsonRes) => {
      res.json(jsonRes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ error: "An error occurred" });
    });
});
app.get("/business", (req, res) => {
  const id = req.query.id;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };
  const url = `https://api.yelp.com/v3/businesses/${id}`;
  fetch(url, options)
    .then((response) => response.json())
    .then((jsonRes) => {
      res.json(jsonRes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ error: "An error occurred" });
    });
});
app.get("/random/:city", (req, res) => {
  const { city } = req.params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };
  const url = `https://api.yelp.com/v3/businesses/search?location=${city}&sort_by=best_match&limit=50`;
  fetch(url, options)
    .then((response) => response.json())
    .then((jsonRes) => {
      res.json(jsonRes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ error: "An error occurred" });
    });
});

module.exports = app;
