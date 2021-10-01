const mongoose = require("mongoose");
const config = require("./index");
const host = config.database.host;
const port = config.database.port;
const db = config.database.db_name;

const mongodb_uri = "mongodb://" + host + ":" + port + "/" + db;

module.exports = mongoose.connect(
  mongodb_uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.error(`🐞 🐛 Failed to connect to mongodb\n\n\n${error} 🐛 🐞`);
      process.exit(1);
    }
    console.log(`🙌 💾 ${mongodb_uri} connected successfully 💽 🙌`);
  }
);
