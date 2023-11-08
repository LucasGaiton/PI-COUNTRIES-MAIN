//ACA VA TODA LA CONFIG DE LA BASE DE DATOS

//importamos doteenv
require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path'); 
const {
  PGUSER, PGPASSWORD, PG_HOST, PGDATABASE, PGPORT
} = process.env;

const sequelize = new Sequelize(`postgresql://${PGUSER}:${PGPASSWORD}@${PG_HOST}:${PGPORT}/${PGDATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones

// Product.hasMany(Reviews);
Country.belongsToMany(Activity,{through: "country_activities"})
Activity.belongsToMany(Country,{through: "country_activities"})

console.log(sequelize.models);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};