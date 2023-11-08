const url = "http://localhost:5000/countries"
//importamos axios
const axios = require("axios")
//importamos funciones 
const {countryTransformer} = require("../MisFunciones")

//importammos el modelo de la base datos 
const {Country} = require("../db")

const getCountriesBd = async(req,res)=>{
    try {
        const {data} = await axios.get(url)
        const countryTransformed = countryTransformer(data)
        const result = await Country.bulkCreate(countryTransformed)
        res.status(200).send("Se cargaron correctamente los datos a la base de datos")
    } catch (error) {
        res.status(500).send(error.message)
        
    }

}
module.exports = getCountriesBd