import { CountriesRepository, Continent } from "./countries-repository";
import { RestCountries } from "./rest-countries";
// adapter implementation
import { RestCountriesAdapter } from "./rest-countries-adapter";

let countriesRepo = new RestCountriesAdapter(new RestCountries());
// let countriesRepo = new CountriesRepository(); // without adapter


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
});

// demo code

// let restCountries = new RestCountries();
// restCountries.getByRegion("Americas").then(NACountries => {
//     console.log(`Number of countries in NA: ${NACountries.length}`);
// })
