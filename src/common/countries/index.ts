import countries from "../../common/countries/index.json";
import countriesEnglishJSON from "../../common/countries/english.json";

export interface CounrtiesInterface {
    countryCode: string;
    callingCode: string;
    mask: string;
}

export interface CounrtiesLanguageInterface {
    [index: string]: string;
}

export default countries as CounrtiesInterface[];

export const countriesEnglish:CounrtiesLanguageInterface = countriesEnglishJSON;
