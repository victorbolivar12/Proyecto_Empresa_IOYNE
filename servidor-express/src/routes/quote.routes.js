import express from "express";
import {
  createQuote,
  getQuotes,
  getQuoteById,
  deleteQuote,
  updateQuote
} from "./../controllers/quote.controller.js";

const router = express.Router();

router.post("/", createQuote);
router.get("/", getQuotes);
router.get("/:id", getQuoteById);
router.put("/:id", updateQuote);
router.delete("/:id", deleteQuote);

export default router;


