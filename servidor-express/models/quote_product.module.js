import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import quoteModel from "./quote.module.js";
import productModule from "./product.module.js";

const quoteProductModel = db.define(
  "quotes_products",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "quotes",
        key: "id"
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id"
      }
    }
  },
  {
    tableName: "cotizaciones_productos",
    timestamps: false,
  }
);

quoteModel.belongsToMany(productModule, {
  through: quoteProductModel,
  foreignKey: "id_cotizacion",
  otherKey: "id_producto"
});

productModule.belongsToMany(quoteModel, {
  through: quoteProductModel,
  foreignKey: "id_producto",
  otherKey: "id_cotizacion"
});

// Sincroniza el modelo con la base de datos
quoteProductModel.sync({ force: false })
  .then(() => {
    console.log('Tabla "cotizaciones_productos" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "cotizaciones_productos" en la base de datos:',
      error
    );
  });

export default quoteProductModel;
