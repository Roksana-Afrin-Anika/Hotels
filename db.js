const mongoose = require("mongoose");
const mongooURL = "mongodb://localhost:27017/myHotel";
mongoose.connect(mongooURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});
db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
module.export = db;
