import type { WithNormalizedProps } from "../../global";
import type { Input as ButtonInput } from "../ebay-button/index.marko";
import type { Input as MenuButtonInput } from "../ebay-menu-button/component";
import type { default as Textbox } from "../ebay-textbox/component-browser";
// import IMask from "imask";
import IMask from "imask/holder";
import "imask/masked/pattern";
import "imask/masked/number";
import "imask/masked/dynamic";

import countries, {
    type CounrtiesLanguageInterface,
} from "../../common/countries";

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

interface PhoneInputInput extends Omit<MenuButtonInput, `on${string}`> {
    size?: ButtonInput["size"];
    disabled?: ButtonInput["disabled"];
    priority?: ButtonInput["priority"];
    "body-state"?: ButtonInput["bodyState"];
    "country-names": CounrtiesLanguageInterface;
    href?: ButtonInput["href"];
    "a11y-button-loading-text"?: ButtonInput["a11yText"];
    "a11y-menu-text"?: MenuButtonInput["a11yText"];
    "country-code": string;
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
    onInput(input: Input) {
        if (input.countryCode) {
            let index = countries.findIndex(
                (country) =>
                    country.countryCode === input.countryCode.toUpperCase(),
            );
            if (index === -1) {
                index = 0;
            }
            this.state.index = index;
        }
    }
    handleCountryChange(e: any) {
        this.state.index = e.index;
        this.forwardEvent("change", {originalEvent: e});
    }

    emitChange() {
        const selectedCountry = countries[this.state.index];
        this.emit("change", {
            rawValue: this.mask.unmaskedValue,
            value: this.mask.value,
            callingCode: selectedCountry.callingCode,
            countryCode: selectedCountry.countryCode,
        });
    }
    forwardEvent(eventName: string, event:PhoneInputEvent) {
        const selectedCountry = countries[this.state.index];
        this.emit(eventName, {
            originalEvent: event.originalEvent,
            rawValue: this.mask.unmaskedValue,
            value: this.mask.value,
            callingCode: selectedCountry.callingCode,
            countryCode: selectedCountry.countryCode,
        } satisfies PhoneInputEvent);
    }

    _initializeMask() {
        const country = countries[this.state.index];
        this.mask = IMask(
            this.getComponent<Textbox>("textbox").getEl<HTMLElement>("input"),
            {
                mask: [
                    {
                        mask: country.mask,
                    },
                    {
                        mask: Number,
                    },
                ],
            },
        );
    }

    onMount() {
        this._initializeMask();
    }

    onUpdate() {
        this._initializeMask();
    }

    onDestroy() {
        this.mask?.destroy();
    }

    onRender() {
        if (typeof window !== "undefined") {
            this.mask?.destroy();
        }
    }
}

export default PhoneInput;
