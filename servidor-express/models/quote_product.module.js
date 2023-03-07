import Quote from "./quote.module.js";
import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import productModule from "./product.module.js";

const QuoteProduct = db.define(
  "quotes_products",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "quotes_products",
    timestamps: false,
  }
);

// Relación con Quote
QuoteProduct.belongsTo(Quote, { foreignKey: { name: "quoteId", allowNull: false } });

// Relación con ProductModule
QuoteProduct.belongsTo(productModule, { foreignKey: { name: "productId", allowNull: false } });

// Sincroniza el modelo con la base de datos
QuoteProduct.sync({ force: false })
  .then(() => {
    console.log('Tabla "quotes_products" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "quotes_products" en la base de datos:',
      error
    );
  });

export default QuoteProduct;
