import { DataTypes } from "sequelize";
import quoteModel from "./quote.module.js";
import productModule from "./product.module.js";
import db from "../db.js";

const quoteProductModel = db.define(
  "quotes_products",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quote_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "quotes",
        key: "id"
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id"
      }
    }
  },
  {
    tableName: "quotes_products",
    timestamps: false,
  }
);

quoteModel.belongsToMany(productModule, {
  through: quoteProductModel,
  foreignKey: "quote_id",
  otherKey: "product_id"
});

productModule.belongsToMany(quoteModel, {
  through: quoteProductModel,
  foreignKey: "product_id",
  otherKey: "quote_id"
});



export default quoteProductModel;
