// This is the adapter interface
// modelled by current status of country-repository.ts
import { Country } from "./country";
import { Continent } from "./countries-repository";

export interface ICountriesRepository {
    all(): Promise<Country[]>;
    allByContinent(continent: Continent): Promise<Country[]>;
    allByCurrency(currency: string): Promise<Country[]>;
}