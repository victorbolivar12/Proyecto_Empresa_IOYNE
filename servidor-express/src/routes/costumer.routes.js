import express from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

// GET /customers
router.get("/", getCustomers);

// GET /customers/:id
router.get("/:id", getCustomerById);

// POST /customers
router.post("/", createCustomer);

// PUT /customers/:id
router.put("/:id", updateCustomer);

// DELETE /customers/:id
router.delete("/:id", deleteCustomer);

export default router;