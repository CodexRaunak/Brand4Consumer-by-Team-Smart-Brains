const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("Root working");
});

app.get("/brand", (req, res) => {
  res.render("index.ejs");
});

app.get("/customer/review", (req, res) => {
  res.render("review.ejs");
});

app.get("/customer", (req, res) => {
  res.render("customer.ejs");
});

app.get("/customer/review/add", (req, res) => {
  res.render("upload.ejs");
});
