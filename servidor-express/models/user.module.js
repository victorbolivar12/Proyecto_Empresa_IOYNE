import { DataTypes } from "sequelize";
import db from "./../database/db.js";
import { newUsers } from "../data/usersData.js";

const UserModule = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

UserModule.prototype.validPassword = async function (password) {
  return this.password === password;
};

// // Sincroniza el modelo con la base de datos
// UserModule.sync({ force: false })
//   .then(() => {
//     console.log('Tabla "usuarios" creada en la base de datos');
//   })
//   .catch((error) => {
//     console.error(
//       'Error al crear la tabla "usuarios" en la base de datos:',
//       error
//     );
//   });

// UserModule.bulkCreate(newUsers)
//   .then(newUsers => {
//     console.log('Nuevos usuarios insertados');
//   })
//   .catch(error => {
//     console.error('Error al insertar usuarios:', error);
//   });



export default UserModule;
