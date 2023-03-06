import { DataTypes } from "sequelize";
import db from "./../database/db.js";

const productModule = db.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      detalle: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );
  
// Sincroniza el modelo con la base de datos
productModule.sync({ force: false })
  .then(() => {
    console.log('Tabla "product" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "users" en la base de datos:',
      error
    );
  });

export default productModule;