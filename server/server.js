const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
console.log(process.env.RAZORPAY_KEY_ID)
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const shopRoutes = require("./routes/shopRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const mongo = require("./configs/dbConfig");
const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use("/api/user", userRoutes)

// TOKEN AUTHENTICATION- ALL THE ROUTES WRITTEN BELOW THIS WILL NEED TOKEN TO BE SENT in request headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use("/api/payment", paymentRoutes)
app.use("/api", shopRoutes);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
