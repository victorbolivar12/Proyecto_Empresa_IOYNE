import productModule from "../models/product.module.js";

// GET /products
const getProducts = async (req, res) => {
  try {
    const products = await productModule.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /products/:id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModule.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /products
const createProduct = async (req, res) => {
  try {
    await productModule.create(req.body);
    res.json({
      message: "Producto creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /products/:id
const updateProduct = async (req, res) => {
  try {
    await productModule.update(req.body, { where: { id: req.params.id } });
    res.json({
      message: "Producto actualizado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE /products/:id
const deleteProduct = async (req, res) => {
  try {
    await productModule.destroy({ where: { id: req.params.id } });
    res.json({
      message: "Registro eliminado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };