const { Router } = require("express"); // importamos router de express
const router = Router(); //Ejecutamos el router
//importamos los controladores 
const getCountriesBd = require("../controllers/getCountriesBd")
const getCountriesById = require("../controllers/getCountriesById")
const getCountries = require("../controllers/getCountries")
const postActivities = require("../controllers/postActivities")
const getActivities = require("../controllers/getActivities")



//Aca vamos a poner todas las rutas
router.get("/countriesBd", async(req,res)=>{ // Esta peticion va a ser sola para guardar tod en la base de datos 
    getCountriesBd(req,res)

})
router.get("/countries/:idPais", (req,res)=>{
    getCountriesById(req,res)
    

})
router.get("/countries", (req,res)=>{
    getCountries(req,res)
    
    
})

router.post("/activities", (req,res)=>{
    postActivities(req,res)

})
router.get("/activities", (req,res)=>{
    getActivities(req,res)
    
    
})

module.exports = router; // importamos el router para depues usarlo en el server.js o app 
