const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const shopRoutes = require("./routes/shopRoutes");
const mongo = require("./configs/dbConfig");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());

app.use("/api", shopRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
