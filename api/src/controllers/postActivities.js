//importamos al tabla de la base de datos 
const { Activity, Country } = require("../db")

const { Op } = require("sequelize")

const postActivities = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        if (!name || !difficulty || !duration || !season || !countries) return res.status(500).send("Faltan datos")
        //Creamos la actividad 
        const createdActivity = await Activity.create({ name, difficulty, duration, season })

        //Buscamos el country en la base de datos 
        const foundCountries = await Promise.all(countries.map((country) => Country.findAll({
            where: {
                name: {
                    [Op.iLike]: country
                }
            }
        })))
        //asociamos a la actividad creada
        await Promise.all(foundCountries.map((country) => createdActivity.setCountries(country)))
        //MOstramos una resouesta de que todo salio bien 
        return res.status(200).send("Se agrego la nueva activity")

    } catch (error) {
        return res.status(500).send(error.message)

    }

}
module.exports = postActivities