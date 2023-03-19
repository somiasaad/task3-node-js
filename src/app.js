// express // Frame  nodejs

// (crud operations)
// create  =>  post
// read    =>  get
// Update  =>  patch
// delete  =>  delete

// Local host
// D // www.amazon.com

// localhost :  port  3000  5000
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/about", (req, res) => {
//   res.send("This is data in about Page ");
// });

// app.get("/service", (req, res) => {
//   res.send("This is data in SERVICE PAGE ");
// });

// app.get("/team", (req, res) => {
//   res.send("<h2> Islam Mohamed </h2>  <button> Send </button>");
// });

// app.get("/data1", (req, res) => {
//   res.send({
//     name: "ahmed",
//     age: 20,
//     city: "Cairo",
//   });
// });

// app.get("/data", (req, res) => {
//   res.send({
//     name: "Islam",
//     age: 26,
//     city: "Mansoura",
//   });
// });

// hbs
const path = require("path");
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

const viewsDirectory = path.join(__dirname, "../temp1/views");
app.set("views", viewsDirectory);

var hbs = require("hbs");

const partialsPath = path.join(__dirname, "../temp1/partials");

hbs.registerPartials(partialsPath);
////////////////////////////////////////////////////////////
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    desc: "this is home page",
    image1: "img/logo(2).png",
    footer: "img/footer1.lpg",
    about1: "img/about.png",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "SERVICES",
    desc: "this is service page",
    name: "somia",
    age: 22,
    image1: "img/logo(2).png",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact",
    desc: "this is contact page",
    name: "sars",
    age: 33,
    city: "cairo",
    image1: "img/logo(2).png",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {});
});
app.get("/footer", (req, res) => {
  res.render("footer", {});
});

//////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/////////////////////////////////////////////////////////////////////////////////

// Static
// path

// modules :

// const path = require("path");
// const x = path.join(__dirname, "../public");
// app.use(express.static(x));
// console.log(__dirname);
