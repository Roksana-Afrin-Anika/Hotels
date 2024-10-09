const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const data = await Person.find({ work: workType });
      console.log("WorkType Fetched Succesfully");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Invalid WorkType" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameters
    const updatedPersonData = req.body; //Updated data for the person
    const data = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, //Return the updated document
      runValidators: true, //Run Mongoose validation
    });
    if (!data) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("Data Updated");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const data = await Person.findByIdAndDelete(personId);
    if (!data) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data Deleted");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
