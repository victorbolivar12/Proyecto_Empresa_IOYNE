import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import customerModule from "./customer.module.js";
import UserModule from "./user.module.js";

const quoteModel = db.define(
  "quotes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    precio_envio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    descuento: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    descuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
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
    tableName: "cotizaciones",
    timestamps: false,
  }
);

// Relación con UserModule
quoteModel.belongsTo(UserModule, {
  foreignKey: { name: "id_usuario", field: "id_usuario", allowNull: false },
});

// Relación con CustomerModule
quoteModel.belongsTo(customerModule, {
  foreignKey: { name: "id_cliente", field: "id_cliente", allowNull: false },
});


// Sincroniza el modelo con la base de datos
// quoteModel
//   .sync({ force: false })
//   .then(() => {
//     console.log('Tabla "cotizaciones" creada en la base de datos');
//   })
//   .catch((error) => {
//     console.error(
//       'Error al crear la tabla "cotizaciones" en la base de datos:',
//       error
//     );
//   });

// // Define un array de objetos que representan los registros que deseas insertar
// const newQuotes = [
//   {
//     id: 1,
//     fecha: new Date(),
//     precio_envio: 100.0,
//     descuento: 10.0,
//     subtotal: 90.0,
//     total: 80.0,
//     id_usuario: 1,
//     id_cliente: 1
//   },
//   {
//     id: 2,
//     fecha: new Date(),
//     precio_envio: 200.0,
//     descuento: 20.0,
//     subtotal: 180.0,
//     total: 160.0,
//     id_usuario: 2,
//     id_cliente: 2
//   },
//   // ...
// ];

// // Llama al método bulkCreate() en el modelo para insertar los nuevos registros
// quoteModel.bulkCreate(newQuotes)
//   .then(newQuotes => {
//     console.log('Nuevos registros insertados:', newQuotes);
//   })
//   .catch(error => {
//     console.error('Error al insertar registros:', error);
//   });


export default quoteModel;
