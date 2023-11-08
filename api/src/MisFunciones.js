module.exports = {
    countryTransformer: (countries)=>{
        let resul = countries.map((country)=>{
            let continent = ""
            let capital = ""
            if(country.continents === undefined){
                continent = undefined
            }
            else{
                continent = country.continents[0]
            }  
            if(country.capital === undefined){
                capital = "The capital is not indicated"
            }
            else{
                capital = country.capital[0]
            }
            return {
                id:country.cca3,
                name:country.name.common,
                image:country.flags.svg,
                continent:continent,
                capital:capital,
                subregion:country.subregion === undefined ? "the subregion is not indicated" : country.subregion ,
                area:country.area,
                population: country.population,
                independent:country.independent
            }
        })
        return resul
    },
}