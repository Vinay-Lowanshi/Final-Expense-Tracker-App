const sequelize=require('./connect')
const DataTypes=require('sequelize')

const user = sequelize.define('user', {
    // Model attributes are defined here
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      mobile: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
  }, {
    // Other model options go here
  });

  module.exports=user