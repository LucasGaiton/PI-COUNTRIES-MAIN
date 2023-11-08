const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            }
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,///para que no se generen los parametros en la base de datos no necesarios
    });
};