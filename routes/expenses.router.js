const express = require('express');
const router = express.Router();

const Expenses = require('../models/expense.model');
const seedDummyData = require('../db/dummyData');

// Fetching Expenses Data API
router.get('/', async (req, res) => {
  try {
    const expenses = await getAllExpenses();
    if(expenses.length === 0){
      seedDummyData('expenses', addExpense);
    }
    res.status(200).json({
      message: "Expenses Found",
      expenses,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
})

async function getAllExpenses(){
  try {
    const expenses = await Expenses.find();
    return expenses;
  } catch (error) {
    throw error;
  }
}

// Adding Expense Entry API
router.post('/', async (req, res) => {
  try {
    const { expenseData } = req.body;
    const expense = await addExpense(expenseData);
    res.status(201).json({
      message: "Expense Added",
      expense,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
});

async function addExpense(expenseData) {
  try {
    const newExpense = new Expenses(expenseData);
    const createdExpense = await newExpense.save();
    return createdExpense;
  } catch (error) {
    throw error;
  }
}

module.exports = router;