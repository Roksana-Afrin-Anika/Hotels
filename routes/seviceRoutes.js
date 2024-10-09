const express = require("express");
const router = express.Router();
const Services = require("./../models/service");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const services = new Services(data);
    const response = await services.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
