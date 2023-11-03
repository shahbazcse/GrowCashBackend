const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;