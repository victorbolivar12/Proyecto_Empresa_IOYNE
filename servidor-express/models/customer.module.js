import { DataTypes } from "sequelize";
import db from "./../database/db.js";

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
    tableName: "customers",
    timestamps: false,
  }
);

// Sincroniza el modelo con la base de datos
customerModule
  .sync({ force: false })
  .then(() => {
    console.log('Tabla "customers" creada en la base de datos');
  })
  .catch((error) => {
    console.error(
      'Error al crear la tabla "customers" en la base de datos:',
      error
    );
  });

export default customerModule;
