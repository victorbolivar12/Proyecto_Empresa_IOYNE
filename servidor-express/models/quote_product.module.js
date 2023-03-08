import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import productModule from "./product.module.js";
import quoteModel from "./quote.module.js";

const quoteProductModel = db.define(
  "quotes_products",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
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
quoteProductModel.belongsTo(quoteModel, { foreignKey: { name: "quoteId", allowNull: false } });

// Relación con ProductModule
quoteProductModel.belongsTo(productModule, { foreignKey: { name: "idProduct", allowNull: false } });

// Sincroniza el modelo con la base de datos
quoteProductModel.sync({ force: false })
  .then(() => {
    console.log('Tabla "quotes_products" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "quotes_products" en la base de datos:',
      error
    );
  });

export default quoteProductModel;
