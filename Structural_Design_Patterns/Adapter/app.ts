import { CountriesRepository, Continent } from "../../countries-repository";

let countriesRepo = new CountriesRepository();
countriesRepo.allByCurrency("EUR").then(euroCountries => {
    console.log("Euro Countries: ");
    euroCountries.forEach(country => {
        console.log("Name: ", country.name)
        console.log("    Capital: ", country.capital)
        console.log("    Currency: ", country.currency)
    })
});


countriesRepo.allByContinent(Continent.NorthAmerica).then(northAmerica => {
    console.log(`Number of NA countries stored: ${northAmerica.length}`);
})
