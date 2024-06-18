import countries from "./countries";

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
