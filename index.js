const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const managerRoutes = require("./routes/manager");
const transporterRoutes = require("./routes/transporter");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hi man :)");
});

app.use("/manager", managerRoutes);
app.use("/transporter", transporterRoutes);

mongoose.connect(
  "mongodb+srv://p4cman:NBlack13011996@cluster0-xquld.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "wallet",
  }
);

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

mongoose.connection.once("open", function () {
  console.log(`☕ Database : ON`);
});

app.listen(port, () => console.log("☕ Server on !!!!"));
