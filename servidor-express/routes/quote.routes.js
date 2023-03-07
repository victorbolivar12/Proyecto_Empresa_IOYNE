import express from "express";
import {
  getQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quote.controller.js";

const router = express.Router();

// GET /quotes
router.get("/", getQuotes);

// GET /quotes/:id
router.get("/:id", getQuoteById);

// POST /quotes
router.post("/", createQuote);

// PUT /quotes/:id
router.put("/:id", updateQuote);

// DELETE /quotes/:id
router.delete("/:id", deleteQuote);

export default router;


