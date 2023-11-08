//importamos axios 
const axios = require("axios")

//importamos los modelos 
const { Country, Activity } = require("../db")

const getCountriesBdId = async (req,res)=>{
    try {
        const {idPais} = req.params
        const result = await Country.findOne({ include:Activity, where:{id:idPais}})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send("Este es el error")
        
    }

}
module.exports = getCountriesBdId