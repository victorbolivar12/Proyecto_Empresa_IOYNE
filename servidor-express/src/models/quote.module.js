import { DataTypes } from "sequelize";
import customerModule from "./customer.module.js";
import UserModule from "./user.module.js";
import db from "../db.js";

const quoteModel = db.define(
  "quotes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    shipping_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    tableName: "quotes",
    timestamps: false,
  }
);

// Relationship with  UserModule
quoteModel.belongsTo(UserModule, {
  foreignKey: { name: "user_id", field: "user_id", allowNull: false },
});

// Relationship with CustomerModule
quoteModel.belongsTo(customerModule, {
  foreignKey: { name: "custumer_id", field: "custumer_id", allowNull: false },
});


export default quoteModel;
