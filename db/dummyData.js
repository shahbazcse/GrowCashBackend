const data = {
  expenses: [
  {
    "payee": "Grocery Store",
    "amount": 75.50,
    "description": "Weekly grocery shopping",
    "category": "Groceries"
  },
  {
    "payee": "Gas Station",
    "amount": 40.25,
    "description": "Fuel for the car",
    "category": "Transportation"
  },
  {
    "payee": "Utility Company",
    "amount": 120.00,
    "description": "Monthly electricity bill",
    "category": "Utilities"
  },
  {
    "payee": "Local Restaurant",
    "amount": 65.75,
    "description": "Dinner with family",
    "category": "Dining Out"
  },
  {
    "payee": "Online Retailer",
    "amount": 85.99,
    "description": "Online shopping for clothing",
    "category": "Shopping"
  },
  {
    "payee": "Pharmacy",
    "amount": 15.50,
    "description": "Medicine and healthcare products",
    "category": "Healthcare"
  },
  {
    "payee": "Fitness Center",
    "amount": 50.00,
    "description": "Monthly gym membership",
    "category": "Fitness"
  },
  {
    "payee": "Coffee Shop",
    "amount": 10.75,
    "description": "Morning coffee",
    "category": "Dining Out"
  },
  {
    "payee": "Public Transport",
    "amount": 30.00,
    "description": "Monthly bus pass",
    "category": "Transportation"
  },
  {
    "payee": "Mobile Phone Provider",
    "amount": 60.00,
    "description": "Monthly mobile phone bill",
    "category": "Utilities"
  }
],
  incomes: [
  {
    "source": "Employer",
    "amount": 5000.00,
    "description": "Monthly salary payment",
    "category": "Salary"
  },
  {
    "source": "Freelance Work",
    "amount": 800.00,
    "description": "Payment for freelance project",
    "category": "Freelance"
  },
  {
    "source": "Investment Dividends",
    "amount": 300.00,
    "description": "Quarterly dividend payout",
    "category": "Investments"
  },
  {
    "source": "Side Gig",
    "amount": 400.00,
    "description": "Earnings from part-time job",
    "category": "Part-time"
  },
  {
    "source": "Rental Income",
    "amount": 1200.00,
    "description": "Monthly rental income from property",
    "category": "Rental"
  },
  {
    "source": "Online Sales",
    "amount": 350.00,
    "description": "Earnings from online store",
    "category": "E-commerce"
  },
  {
    "source": "Consulting",
    "amount": 600.00,
    "description": "Consulting fees",
    "category": "Consulting"
  },
  {
    "source": "Interest Income",
    "amount": 50.00,
    "description": "Bank account interest",
    "category": "Interest"
  },
  {
    "source": "Gift",
    "amount": 100.00,
    "description": "Birthday gift from a friend",
    "category": "Gift"
  },
  {
    "source": "Royalties",
    "amount": 250.00,
    "description": "Royalties from a book",
    "category": "Royalties"
  }
],
  savings: [
  {
    "source": "Savings Account",
    "amount": 500.00,
    "description": "Monthly contribution to emergency fund",
    "category": "Emergency Fund"
  },
  {
    "source": "Investment Portfolio",
    "amount": 300.00,
    "description": "Additional investment in stocks",
    "category": "Investments"
  },
  {
    "source": "High-Yield Savings",
    "amount": 200.00,
    "description": "Saving for a future vacation",
    "category": "Vacation Fund"
  },
  {
    "source": "401(k)",
    "amount": 1000.00,
    "description": "Monthly contribution to retirement account",
    "category": "Retirement"
  },
  {
    "source": "Savings Account",
    "amount": 150.00,
    "description": "Adding to the rainy day fund",
    "category": "Rainy Day Fund"
  },
  {
    "source": "Investment Portfolio",
    "amount": 500.00,
    "description": "Increasing investment in bonds",
    "category": "Investments"
  },
  {
    "source": "High-Yield Savings",
    "amount": 250.00,
    "description": "Saving for a new car",
    "category": "Car Fund"
  },
  {
    "source": "Emergency Savings",
    "amount": 400.00,
    "description": "Building an emergency fund",
    "category": "Emergency Fund"
  },
  {
    "source": "401(k)",
    "amount": 800.00,
    "description": "Additional retirement savings",
    "category": "Retirement"
  },
  {
    "source": "Savings Account",
    "amount": 350.00,
    "description": "Saving for home down payment",
    "category": "Home Fund"
  }
],
};

const seedData = (type, addEntry) => {
  if(type === 'expenses'){
    data.expenses.forEach((expense) => addEntry(expense));
  }else if(type === 'incomes'){
    data.incomes.forEach((income) => addEntry(income));
  }else if(type === 'savings'){
    data.savings.forEach((saving) => addEntry(saving));
  }
  console.log("Seeded Dummy Data...");
};

module.exports = seedData;