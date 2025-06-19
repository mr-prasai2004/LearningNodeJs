const { PASSWORD } = require("../config/dbConfig")

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('user',{
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type: DataTypes.INTEGER,
        }

    })
    return User;
    
};