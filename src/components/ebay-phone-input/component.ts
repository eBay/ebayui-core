import type { WithNormalizedProps } from "../../global";
import type { Input as ListboxButton } from "../ebay-listbox-button/component";
import type { default as Textbox } from "../ebay-textbox/component-browser";
import mask, { stripNonDigits } from "../../common/mask";

import countries, {
    type CountriesLanguageInterface,
    type CountryInterface,
    countriesEnglish,
} from "../../common/countries";
import { AttrString } from "marko/tags-html";

export interface CountryNames {
    [index: string]: string;
}

export interface PhoneInputEvent {
    originalEvent?: Event;
    value?: string;
    rawValue?: string;
    callingCode?: string;
    countryCode?: string;
}

interface PhoneInputInput extends Omit<ListboxButton, `on${string}`> {
    disabled?: boolean;
    "country-names"?: CountriesLanguageInterface;
    "a11y-icon-prefix-text"?: AttrString;
    "floating-label"?: AttrString;
    readonly?: boolean;
    invalid?: boolean;
    "country-code"?: string;
    value?: string;
    "on-keyup"?: (event: PhoneInputEvent) => void;
    "on-keypress"?: (event: PhoneInputEvent) => void;
    "on-keydown"?: (event: PhoneInputEvent) => void;
    "on-focus"?: (event: PhoneInputEvent) => void;
    "on-blur"?: (event: PhoneInputEvent) => void;
    "on-collapse"?: (event: PhoneInputEvent) => void;
    "on-expand"?: (event: PhoneInputEvent) => void;
    "on-change"?: (event: PhoneInputEvent) => void;
}

export interface Input extends WithNormalizedProps<PhoneInputInput> {}

export interface State {
    index: number;
}

class PhoneInput extends Marko.Component<Input, State> {
    mask: any;

    onCreate() {
        this.state = {
            index: 0,
        };
    }

    getSelectedCountry(): CountryInterface {
        const countryNames = this.input.countryNames || countriesEnglish;
        const currentCountryName = Object.keys(countryNames)[this.state.index];
        return countries[currentCountryName];
    }

    onInput(input: Input) {
        const countryNames: CountriesLanguageInterface =
            input.countryNames || countriesEnglish;
        const { countryCode } = input;
        if (countryCode) {
            let index = Object.keys(countryNames).findIndex(
                (country) => country === countryCode.toUpperCase(),
            );
            if (index === -1) {
                index = 0;
            }
            this.state.index = index;
        }
    }
    handleCountryChange(e: any) {
        this.state.index = e.index;

        // Trigger change event after state is updated so that the right mask value will be emitted
        this.once("update", () => {
            this.forwardEvent("change", { originalEvent: e });
        });
    }

    forwardEvent(eventName: string, event: PhoneInputEvent) {
        const selectedCountry = this.getSelectedCountry();
        setTimeout(() => {
            this.emit(eventName, {
                originalEvent: event.originalEvent,
                value: this.mask.value,
                rawValue: stripNonDigits(this.mask.value || ""),
                callingCode: selectedCountry.callingCode,
                countryCode: selectedCountry.countryCode,
            } satisfies PhoneInputEvent);
        });
    }

    _initializeMask() {
        const country = this.getSelectedCountry();
        this.mask = mask(
            this.getComponent<Textbox>("textbox").getEl<HTMLInputElement>(
                "input",
            ),
            country.mask,
        );
    }

    onMount() {
        this._initializeMask();
    }

    onUpdate() {
        if (this.mask) {
            this.mask.update(
                this.getComponent<Textbox>("textbox").getEl<HTMLInputElement>(
                    "input",
                ).value,
                this.getSelectedCountry().mask,
            );
        }
    }

    onDestroy() {
        this.mask?.destroy();
    }
}

export default PhoneInput;
