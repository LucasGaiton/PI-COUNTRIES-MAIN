const axios = require("axios");
const server = require("./src/server");
//importamos la funciona para llenar la base de datos 

const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
  await axios.get("http://localhost:3001/countriesBd") 
})
}).catch(error => console.error(error))
