import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const marcas = sequelize.define('marcas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default marcas;