import quoteModel from "../models/quote.module.js";
import quoteProductModel from "../models/quote_product.module.js";
import customerModule from "../models/customer.module.js"
import productModule from "../models/product.module.js";
import UserModule from "../models/user.module.js";


// Obtener todas las cotizaciones
export const getQuotes = async (req, res) => {
  try {
    const quotes = await quoteModel.findAll({
      include: [
        {
          model: customerModule,
          attributes: ["id", "nombre", "apellido", "telefono", "correo"],
        },
        {
          model: UserModule,
          attributes: ["id", "username", "email"],
        },
        {
          model: quoteProductModel,
          attributes: ["cantidad"],
          include: [
            {
              model: productModule,
              attributes: ["id", "nombre", "precio"],
            },
          ],
        },
      ],
    });
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener las cotizaciones." });
  }
};

// Obtener una cotización por id
export const getQuoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await quoteModel.findOne({
      where: { id },
      include: [
        {
          model: customerModule,
          attributes: ["id", "nombre", "apellido", "telefono", "correo"],
        },
        {
          model: UserModule,
          attributes: ["id", "username", "email"],
        },
        {
          model: quoteProductModel,
          attributes: ["cantidad"],
          include: [
            {
              model: productModule,
              attributes: ["id", "nombre", "precio"],
            },
          ],
        },
      ],
    });
    if (!quote) {
      return res.status(404).json({ message: "Cotización no encontrada." });
    }
    res.status(200).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener la cotización." });
  }
};

// Crear una nueva cotización
export const createQuote = async (req, res) => {
  const { customerId, userId, products } = req.body;
  try {
    const customer = await customerModule.findByPk(customerId);
    const user = await UserModule.findByPk(userId);
    if (!customer || !user) {
      return res
        .status(404)
        .json({ message: "Cliente o usuario no encontrado." });
    }
    const quote = await quoteModel.create(
      {
        customerId,
        userId,
        quotesproducts: products,
      },
      { include: quoteProductModel }
    );
    res.status(201).json({ message: "Cotización creada con éxito.", quote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear la cotización." });
  }
};

// Actualizar una cotización
export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { customerId, userId, products } = req.body;
  try {
    const quote = await quoteModel.findOne({ where: { id } });
    if (!quote) {
      return res.status(404).json({ message: "Cotización no encontrada." });
    }
    const customer = await customerModule.findByPk(customerId);
    const user = await UserModule.findByPk(userId);
    if (!customer || !user) {
      return res
        .status(404)
        .json({ message: "Cliente o usuario no encontrado." });
    }
    await quote.update({ customerId, userId });
    // Actualizar las cotizaciones de productos
    await Promise.all(
      products.map(async (product) => {
        const { id: productId, cantidad } = product;
        const quoteProduct = await quoteProductModel.findOne({
          where: { quoteId: quote.id, productId },
        });
        if (!quoteProduct) {
          return await quoteProductModel.create({
            quoteId: quote.id,
            productId,
            cantidad,
          });
        }
        await quoteProduct.update({ cantidad });
      })
    );
    res.status(200).json({ message: "Cotización actualizada con éxito." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar la cotización." });
  }
};

// Eliminar una cotización
export const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await quoteModel.findOne({ where: { id } });
    if (!quote) {
      return res.status(404).json({ message: "Cotización no encontrada." });
    }
    await quote.destroy();
    res.status(200).json({ message: "Cotización eliminada con éxito." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar la cotización." });
  }
};
