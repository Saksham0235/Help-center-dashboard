const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.post("/cards", async (req, res) => {
  const { title, id, description } = req.body;
  try {
    const newCard = new Card({ title, id, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.find({ title });
    if (!card) {
      return res.status(404).json({ error: "Card Not found" });
    }
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
