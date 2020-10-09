const express = require("express");
const config = require("./config/config");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const incident = require("./routes/api/incident");
const db = require("./services/db");
const user = require("./routes/api/userApi");
const bodyParser = require("body-parser");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handlebars middleware
let hbs = exphbs.create({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  defaultLayout: "main",
  helpers: {
    dater: (date) => date.toDateString(),
    statusColor: (status) => {
      if (status == "OPEN") {
        return "color:red";
      } else {
        return "color:green";
      }
    },
    statusCounter: (incidents) => {
      let count = 0;
      incidents.forEach(element => {
        if(element.status=="OPEN"){
            count=count+1
        }
      });

      return count;
    },
    resolved:(incidents)=>{
      let count = 0;
      incidents.forEach(element => {
        if(element.status!="OPEN"){
            count=count+1
        }
      });

      return count;
    }
  },
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

//app.use(express.urlencoded({extended:true})); //Parse URL-encoded bodies
app.use("/user", user);
app.use("/incident", incident);

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(config.port, () => {
  console.log(
    `Incident Management App started at http://${config.Server}:${config.port}`
  );
});
