const mongoose = require('mongoose');

const savingSchema = mongoose.Schema({
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

const Saving = mongoose.model('Saving', savingSchema);

module.exports = Saving;