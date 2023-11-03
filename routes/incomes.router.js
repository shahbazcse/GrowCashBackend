const express = require('express');
const router = express.Router();

const Incomes = require('../models/income.model');
const seedDummyData = require('../db/dummyData');

// Fetching Incomes Data API
router.get('/', async (req, res) => {
  try {
    const incomes = await getAllIncomes();
    if(incomes.length === 0){
      seedDummyData('incomes', addIncome);
    }
    res.status(200).json({
      message: "Incomes Found",
      incomes,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
})

async function getAllIncomes(){
  try {
    const incomes = await Incomes.find();
    return incomes;
  } catch (error) {
    throw error;
  }
}

// Adding Income Entry API
router.post('/', async (req, res) => {
  try {
    const { incomeData } = req.body;
    const income = await addIncome(incomeData);
    res.status(201).json({
      message: "Income Added",
      income,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
});

async function addIncome(incomeData) {
  try {
    const newIncome = new Incomes(incomeData);
    const createdIncome = await newIncome.save();
    return createdIncome;
  } catch (error) {
    throw error;
  }
}

module.exports = router;