const express = require("express");
const router = express.Router();
const ExpertModel = require("../models/experts_model");

// Getting all experts
router.get("/get", async (req, res) => {
  try {
    const experts = await ExpertModel.find();
    res.json(experts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Creating an expert
router.post("/create", async (req, res) => {
  const expert = new ExpertModel(req.body);
  try {
    const newExpert = await expert.save();
    res.status(201).json(newExpert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get experts by farmer's location 
router.get("/getByFarmersByLocation", async (req, res) => {
  try {
    const experts = await ExpertModel.find();
    res.json(experts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
