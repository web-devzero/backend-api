const express = require('express');
const router = express.Router();

let menuItems = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 8 },
];

// GET /api/menu
router.get('/', (req, res) => {
  res.json(menuItems);
});

// POST /api/menu
router.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = menuItems.length + 1;
  menuItems.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;

