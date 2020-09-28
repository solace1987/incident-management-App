const express = require("express");
const config = require("./config/config");
const exphbs = require("express-handlebars");
const incident = require("./routes/api/incident");
const db = require("./services/db");
const user= require('./routes/api/userApi')
const bodyParser= require("body-parser")
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));

//app.use(express.urlencoded({extended:true})); //Parse URL-encoded bodies
app.use('/user', user );
app.use('/incident', incident);

app.get("/",(req,res)=>{
    res.render('index')
})
app.listen(config.port, () => {
  console.log(
    `Incident Management App started at http://${config.Server}:${config.port}`
  );
});
