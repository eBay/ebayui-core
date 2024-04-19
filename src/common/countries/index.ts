import countries from "./countries";
import countriesEnglishJSON from "./english";

export interface CountryInterface {
    countryCode: string;
    callingCode: string;
    mask: string;
}

export interface CountriesLanguageInterface {
    [index: string]: string;
}

export interface CountriesInterface {
    [index: string]: CountryInterface;
}

export default countries as CountriesInterface;

export const countriesEnglish: CountriesLanguageInterface =
    countriesEnglishJSON as CountriesLanguageInterface;
