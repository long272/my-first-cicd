const express = require('express');
const app = express();

app.use(express.json());

// GET / — kiểm tra API còn sống không
app.get('/', (req, res) => {
  res.json({ message: 'Calculator API is running!' });
});

// POST /add — cộng hai số
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a và b phải là số' });
  }
  res.json({ result: a + b });
});

// POST /subtract — trừ hai số
app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a và b phải là số' });
  }
  res.json({ result: a - b });
});

// POST /multiply — nhân hai số
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a và b phải là số' });
  }
  res.json({ result: a * b });
});

// POST /divide — chia hai số
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a và b phải là số' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Không thể chia cho 0' });
  }
  res.json({ result: a / b });
});

module.exports = app;