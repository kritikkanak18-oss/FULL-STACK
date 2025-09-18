// server.js

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
let cards = [
  { id: 1, suit: "Hearts", value: "Ace" },
  { id: 2, suit: "Spades", value: "King" },
  { id: 3, suit: "Diamonds", value: "Queen" },
];

// GET all cards
app.get("/cards", (req, res) => {
  res.status(200).json(cards);
});

// GET a card by ID
app.get("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ message: `Card with ID ${id} not found` });
  }

  res.status(200).json(card);
});

// POST - Add a new card
app.post("/cards", (req, res) => {
  const { suit, value } = req.body;

  if (!suit || !value) {
    return res
      .status(400)
      .json({ message: "Both 'suit' and 'value' are required" });
  }

  const newCard = {
    id: cards.length ? cards[cards.length - 1].id + 1 : 1,
    suit,
    value,
  };

  cards.push(newCard);
  res.status(201).json(newCard);
});

// DELETE - Remove a card by ID
app.delete("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cards.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Card with ID ${id} not found` });
  }

  const removedCard = cards.splice(index, 1)[0];
  res.status(200).json({
    message: `Card with ID ${id} removed`,
    card: removedCard,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
