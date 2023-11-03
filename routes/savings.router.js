const express = require('express');
const router = express.Router();

const Savings = require('../models/saving.model');
const seedDummyData = require('../db/dummyData');

// Fetching Savings Data API
router.get('/', async (req, res) => {
  try {
    const savings = await getAllSavings();
    if(savings.length === 0){
      seedDummyData('savings', addSaving);
    }
    res.status(200).json({
      message: "Savings Found",
      savings,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
})

async function getAllSavings(){
  try {
    const savings = await Savings.find();
    return savings;
  } catch (error) {
    throw error;
  }
}

// Adding Saving Entry API
router.post('/', async (req, res) => {
  try {
    const { savingData } = req.body;
    const saving = await addSaving(savingData);
    res.status(201).json({
      message: "Saving Added",
      saving,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
});

async function addSaving(savingData) {
  try {
    const newSaving = new Savings(savingData);
    const createdSaving = await newSaving.save();
    return createdSaving;
  } catch (error) {
    throw error;
  }
}

module.exports = router;