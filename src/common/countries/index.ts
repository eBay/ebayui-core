import countries from "./countries";
import countriesEnglishJSON from "./english";

export interface CountryInterface {
    countryCode: string;
    callingCode: string;
    mask: string;
}

export type CountriesLanguageInterface = [string, string][];

export interface CountriesInterface {
    [index: string]: CountryInterface;
}

export default countries as CountriesInterface;

export const countriesEnglish: CountriesLanguageInterface =
    countriesEnglishJSON as CountriesLanguageInterface;
