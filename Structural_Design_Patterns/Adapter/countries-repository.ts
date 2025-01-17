import { Country } from "./country";
import * as fs from 'fs';
import { rejects } from "assert";
import { ICountriesRepository } from "./Icountries-repository";

export enum Continent {
    Africa = "Africa",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    SouthAmerica = "South America",
    Oceania = "Oceania"
}
export class CountriesRepository implements ICountriesRepository{
    async all(): Promise<Country[]> {
        return Promise.all([Continent.Africa, Continent.Asia, Continent.Europe, Continent.NorthAmerica, Continent.SouthAmerica]
            .map(continent => this.allByContinent(continent))).then(results => {
                let consolidated: Country[] = [];
                results.forEach(result => {
                    consolidated.push(...result);
                });
                return consolidated;
            });
    }

    async allByContinent(continent: Continent): Promise<Country[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.continentToFileName(continent), 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let countries: Country[] = JSON.parse(data);
                    resolve(countries);
                }
            })
        });
    }

    async allByCurrency(currency: string): Promise<Country[]> {
        let all = await this.all();
        return all.filter(country => country.currency == currency);
    }

    private continentToFileName(continent: Continent) {
        let prefix: string = 'countries/';
        let fileNames: any = {};
        fileNames[Continent.Africa] = 'africa.json';
        fileNames[Continent.Asia] = 'asia.json';
        fileNames[Continent.Europe] = 'europe.json';
        fileNames[Continent.NorthAmerica] = 'northAmerica.json';
        fileNames[Continent.SouthAmerica] = 'southAmerica.json';
        return prefix + fileNames[Continent[continent]];
    }
}