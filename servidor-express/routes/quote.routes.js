import express from "express";
import {
  createQuote,
  getQuotes,
  getQuoteById,
  deleteQuote,
  updateQuote
} from "../controllers/quote.controller.js";

const router = express.Router();

// POST /quotes
router.post("/", createQuote);

// GET /quotes
router.get("/", getQuotes);

// GET /quotes/:id
router.get("/:id", getQuoteById);

// PUT /quotes/:id
router.put("/:id", updateQuote);

// DELETE /quotes/:id
router.delete("/:id", deleteQuote);

export default router;


