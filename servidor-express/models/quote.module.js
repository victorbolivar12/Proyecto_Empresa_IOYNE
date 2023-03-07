import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import customerModule from "./customer.module.js";
import UserModule from "./user.module.js";
import productModule from "./product.module.js";
import QuoteProduct from "./quote_product.module.js";

const Quote = db.define(
  "quotes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "quotes",
    timestamps: false,
  }
);

// Relación con UserModule
Quote.belongsTo(UserModule, { foreignKey: { name: "userId", allowNull: false } });

// Relación con CustomerModule
Quote.belongsTo(customerModule, { foreignKey: { name: "customerId", allowNull: false } });

// Relación con QuoteProduct
Quote.belongsToMany(productModule, { through: QuoteProduct, foreignKey: "quoteId" });

// Sincroniza el modelo con la base de datos
Quote.sync({ force: false })
  .then(() => {
    console.log('Tabla "quotes" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "quotes" en la base de datos:',
      error
    );
  });

export default Quote;
