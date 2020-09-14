const express = require("express");
const path = require("path");
const config = require("./config/config");
const exphbs = require("express-handlebars");
const incident = require("./routes/api/incident");
const db = require("./services/db");
const users= require('./controller/userdb')


const app = express();
app.use("/incident", incident);
//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));
app.get("/", (req, res) => {

 
users.fetchUser({firstname:'jude'})
res.render("index");
});

app.post("/", (req, res) => {
  res.send("got a post request");
});

app.put("/", (req, res) => {
  res.send("got a put request");
});

app.delete("/", (req, res) => {
  res.send("gota delete request");
});
app.listen(config.port, () => {
  console.log(
    `Incident Management App started at http://${config.Server}:${config.port}`
  );
});
