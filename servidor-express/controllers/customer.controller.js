import CustomerModule from "../models/customer.module.js";

// GET /customers
const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerModule.findAll();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /customers/:id
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await CustomerModule.findByPk(id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /customers
const createCustomer = async (req, res) => {
  try {
    await CustomerModule.create(req.body);
    res.json({
      message: "Customer created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /customers/:id
const updateCustomer = async (req, res) => {
  try {
    await CustomerModule.update(req.body, { where: { id: req.params.id } });
    res.json({
      message: "Customer updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE /customers/:id
const deleteCustomer = async (req, res) => {
  try {
    await CustomerModule.destroy({ where: { id: req.params.id } });
    res.json({
      message: "Record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
