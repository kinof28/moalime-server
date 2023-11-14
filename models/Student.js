const { DataTypes } = require("sequelize");
const sequelize = require("../db/config/connection");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    nationality: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    regionTime: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    registerCode: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isRegistered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    wallet: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    long: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    lat: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    isEnable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    defaultScope: {
      where: {
        isEnable: true,
      },
    },
  }
);

module.exports = Student;
