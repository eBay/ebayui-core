import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";

export interface CharacterCountEvent {
    count: number;
    inputAriaLive: Marko.AriaAttributes["aria-live"];
}

interface CharacterCountInput extends Omit<Marko.HTML.Span, `on${string}`> {
    renderBody?: Marko.Body;
    value?: string | number;
    max: number;
    "clipped-text"?: AttrString;
    "on-change"?: (event?: CharacterCountEvent) => void;
}

export interface Input extends WithNormalizedProps<CharacterCountInput> {}

interface State {
    count: number;
}

class CharacterCount extends Marko.Component<Input, State> {
    declare timeout: NodeJS.Timeout;

    onCreate(input: Input) {
        this.state = {
            count: this.countFromValue(input.value),
        };
    }

    onInput(input: Input) {
        if (typeof window === "undefined") {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.state.count = this.countFromValue(input.value);
            this.emit("change", {
                count: this.state.count,
                inputAriaLive: this.state.count >= input.max ? "polite" : "off",
            } satisfies CharacterCountEvent);
        }, 500);
    }

    countFromValue(value?: string | number) {
        if (typeof value === "string") {
            // use iterator to account for emojis and other multi-char symbols
            return [...value].length;
        }
        if (typeof value === "number") {
            return value;
        }
        return 0;
    }
}

export default CharacterCount;
