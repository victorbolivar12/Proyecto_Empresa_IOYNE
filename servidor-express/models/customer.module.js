import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import { customers } from "../data/costumerData.js";

const customerModule = db.define(
  "customers",
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
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "clientes",
    timestamps: false,
  }
);

// // Sincroniza el modelo con la base de datos
// customerModule
//   .sync({ force: false })
//   .then(() => {
//     console.log('Tabla "clientes" creada en la base de datos');
//   })
//   .catch((error) => {
//     console.error(
//       'Error al crear la tabla "clientes" en la base de datos:',
//       error
//     );
//   });

// Llama al método bulkCreate() en el modelo para insertar los nuevos registros
// customerModule.bulkCreate(customers)
//   .then(customers => {
//     console.log('Nuevos clientes insertados');
//   })
//   .catch(error => {
//     console.error('Error al insertar clientes:', error);
//   });

export default customerModule;
