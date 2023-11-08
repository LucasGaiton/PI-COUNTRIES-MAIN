//importammos el modelo de la base datos 
const { Country, Activity } = require("../db")
const { Op } = require("sequelize")

const getCountries = async (req, res) => {
    try {

        const nombre = req.query.name
        //instanciamos el arreglo de paises que vamos a devolver 
        let foundCountries = []
        if (nombre) {

            //Aca vamos a devolver los paises segun el nombre 
            const name = nombre.toLowerCase()
            foundCountries = await Country.findAll(
                {
                    include: Activity,
                    where: {
                        name: {
                            [Op.iLike]: `%${name}%`
                        }
                    }
                }
            )
            return res.status(200).json(foundCountries)
        }
        foundCountries = await Country.findAll({ include: Activity })
        return res.status(200).json(foundCountries)


    } catch (error) {
        res.status(500).send(error.message)

    }

}
module.exports = getCountries