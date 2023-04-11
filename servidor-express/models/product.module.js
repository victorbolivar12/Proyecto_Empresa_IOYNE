import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import { products } from "../data/productsData.js";

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
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    peso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: "productos",
    timestamps: false,
  }
);


// // Sincroniza el modelo con la base de datos
// productModule
//   .sync({ force: false })
//   .then(() => {
//     console.log('Tabla "productos" creada en la base de datos');
//   })
//   .catch((error) => {
//     console.error(
//       'Error al crear la tabla "productos" en la base de datos:',
//       error
//     );
//   });

// Llama al método bulkCreate() en el modelo para insertar los nuevos registros
// productModule.bulkCreate(products)
//   .then(products => {
//     console.log('Nuevos productos insertados:');
//   })
//   .catch(error => {
//     console.error('Error al insertar productos:', error);
//   });

export default productModule;
