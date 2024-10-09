const mongoose = require("mongoose");
const service = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  is_good: {
    type: Boolean,
    default: true,
  },
  services: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    required: true,
  },
});
const Services = mongoose.model("Services", service);
module.exports = Services;
