const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const DB_URI_DEV =
  "mongodb+srv://ecrmadmin:bTe3dRXaH8YudM6M@ecrm-yfqsp.mongodb.net/test?retryWrites=true&w=majority";
const DB_UTI_PROD = process.env.DB_URI;

const DATABASE_URI = DB_UTI_PROD || DB_URI_DEV;

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST,UPDATE, PATCH, DELETE, GET"
    );
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hi man :)");
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "ecrm0",
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

mongoose.connection.once("open", function () {
  console.log(`☕ Database : ON`);
});

app.listen(PORT, () => console.log("☕ Server on !!!!"));
