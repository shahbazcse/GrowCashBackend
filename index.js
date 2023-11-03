require('./db/db.connection');

const express = require('express');
const app = express();
app.use(express.json());

const expensesRouter = require('./routes/expenses.router');
const incomesRouter = require('./routes/incomes.router');
const savingsRouter = require('./routes/savings.router');

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:3000', 'https://growcash.vercel.app'],
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Mounting /expenses Router
app.use('/expenses', expensesRouter);

// Mounting /incomes Router
app.use('/income', incomesRouter);

// Mounting /savings Router
app.use('/savings', savingsRouter);