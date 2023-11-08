//importamos el modelo 
const {Activity, Country} = require("../db")

const getactivities = async (req,res)=>{
    try {
        const activities = await Activity.findAll({includes:Country})
        return res.status(200).json(activities)

    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}
module.exports = getactivities