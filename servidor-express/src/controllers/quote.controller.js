import quoteModel from "../models/quote.module.js";
import quoteProductModel from "../models/quote_product.module.js";
import customerModule from "../models/customer.module.js";
import productModule from "../models/product.module.js";
import UserModule from "../models/user.module.js";

export const createQuote = async (req, res) => {
  const { fecha, tipoDescuento, id_usuario, id_cliente, productos } = req.body;

  let precio_envio;
  let descuento;
  let subtotal;
  let total;

  // Verificar si el usuario existe
  const usuario = await UserModule.findByPk(id_usuario);
  if (!usuario) {
    return res.status(400).json({ error: "El usuario no existe" });
  }

  // Verificar si el cliente existe
  const cliente = await customerModule.findByPk(id_cliente);
  if (!cliente) {
    return res.status(400).json({ error: "El cliente no existe" });
  }

  try {
    if (productos && productos.length > 0) {
      const acc = { totalWeight: 0, totalPrice: 0 };
      await productos.reduce(async (prevPromise, cur) => {
        await prevPromise;
        const product = await productModule.findByPk(cur.id);
        if (!product) {
          throw new Error(`El producto con id ${producto.id} no existe`);
        }
        acc.totalWeight += product.peso * cur.cantidad;
        acc.totalPrice += product.precio * cur.cantidad;
        return Promise.resolve();
      }, Promise.resolve());

      // si el descuento es porcentual restamos 10% si no monto fijo restamos 50$
      descuento = tipoDescuento == "Porcentual" ? acc.totalPrice * 0.1 : 50;
      //Costo de envío = Peso total x Costo por kilogramo(2$por kiligramo)
      precio_envio = acc.totalWeight * 2;
      // Subtotal = precio total de todos los producto - descuento
      subtotal = acc.totalPrice - descuento;
      //total = subtotal + precio de envio
      total = subtotal + precio_envio;
    }

    // Crear la cotización
    const quote = await quoteModel.create({
      fecha,
      precio_envio,
      descuento,
      subtotal,
      total,
      id_usuario,
      id_cliente,
    });

    // Asociar los productos con la cotización y actualizar la cantidad del modelo productModule correspondiente
    if (productos && productos.length > 0) {
      const quoteProducts = await Promise.all(
        productos.map(async (producto) => {
          const product = await productModule.findByPk(producto.id);
          if (!product) {
            throw new Error(`The product with id ${producto.id} does not exist`);
          }
          if (product.cantidad < producto.cantidad) {
            throw new Error(
              `There are not enough units of the product with id ${producto.id}`
            );
          }
          product.cantidad -= producto.cantidad;
          await product.save();
          return {
            id_cotizacion: quote.id,
            id_producto: producto.id,
            cantidad: producto.cantidad,
          };
        })
      );
      await quoteProductModel.bulkCreate(quoteProducts);
    }

    return res.status(201).json({ message: "Cotzacion creada con exito" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al crear la cotización" });
  }
};

// Obtener todas las cotizaciones
export const getQuotes = async (req, res) => {
  try {
    const quotes = await quoteModel.findAll({
      include: [
        {
          model: UserModule,
          attributes: ["id", "username", "email"],
        },
        {
          model: customerModule,
          attributes: ["id", "name", "lastname", "email"],
        },
        {
          model: productModule,
          attributes: ["id", "name", "price"],
          through: {
            attributes: ["count"],
          },
        },
      ],
    });
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting the quote" });
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
          model: UserModule,
          attributes: ["id", "username", "email"],
        },
        {
          model: customerModule,
          attributes: ["id", "name", "lastname", "email"],
        },
        {
          model: productModule,
          attributes: ["id", "name", "price"],
          through: {
            attributes: ["count"],
          },
        },
      ],
    });
    if (!quote) {
      return res.status(404).json({ message: "Quotation not found." });
    }
    res.status(200).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting the quote." });
  }
};

// Actualizar una cotización
export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { fecha, id_usuario, id_cliente, tipoDescuento,productos } = req.body;

  try {
    // Buscar la cotización a actualizar
    const quote = await quoteModel.findByPk(id);
    if (!quote) {
      return res.status(404).json({ error: "Cotización no encontrada" });
    }

    // Verificar si el usuario y cliente existen
    if (id_usuario) {
      const usuario = await UserModule.findByPk(id_usuario);
      if (!usuario) {
        return res.status(400).json({ error: "El usuario no existe" });
      }
    }
    if (id_cliente) {
      const cliente = await customerModule.findByPk(id_cliente);
      if (!cliente) {
        return res.status(400).json({ error: "El cliente no existe" });
      }
    }

    // Actualizar la cotización
    await quote.update({
      fecha: fecha ?? quote.fecha,
      id_usuario: id_usuario ?? quote.id_usuario,
      id_cliente: id_cliente ?? quote.id_cliente,
    });

    // Actualizar los productos asociados con la cotización
    if (productos && productos > 0) {

      //Restaurar la cantidad de los productos originales
      await Promise.all(
        quote.productos.map(async (producto) => {
          const originalProduct = await productModule.findByPk(producto.id);
          await originalProduct.update({cantidad: originalProduct.cantidad + producto.cantidad});
        })
      );

      // Calcular los totales y descuento
      const acc = { totalWeight: 0, totalPrice: 0 };
      await productos.reduce(async (prevPromise, cur) => {
        await prevPromise;
        const product = await productModule.findByPk(cur.id);
        if (!product) {
          throw new Error(`El producto con id ${producto.id} no existe`);
        }
        acc.totalWeight += product.peso * cur.cantidad;
        acc.totalPrice += product.precio * cur.cantidad;
        return Promise.resolve();
      }, Promise.resolve());
      
      const descuento = (tipoDescuento)? (tipoDescuento === 'Porcentual')? totalPrice * 0.10 : 50: quote.descuento
      const precio_envio = totalWeight * 2;
      const subtotal = totalPrice - descuento;
      const total = subtotal + precio_envio;

      // Actualizar la cotización con los totales
      await quote.update({
        precio_envio,
        descuento,
        subtotal,
        total
      });

      // Crear los nuevos productos de la cotización
      const newQuoteProducts = await Promise.all(
        productos.map(async (producto) => {

          const product = await productModule.findByPk(producto.id);

          if (!product) 
            throw new Error(`Producto con id ${producto.id} no encontrado`);
          
          if (product.cantidad < producto.cantidad) 
            throw new Error(`Producto con id ${producto.id} no tiene suficiente cantidad`);
          
          product.cantidad -= producto.cantidad;
          await product.save();
          return { id_cotizacion: quote.id, id_producto: producto.id, cantidad: producto.cantidad};
        })
      );

      // Actualizar los productos asociados con la cotización en la tabla intermedia
      await quoteProductModel.destroy({ where: { id_cotizacion: quote.id}});
      await quoteProductModel.bulkCreate(newQuoteProducts);
      return res.status(200).json({ message: "Cotizacion actulizada con exito"});
    }

    
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ error: "cotización actualizada con exito" });
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
