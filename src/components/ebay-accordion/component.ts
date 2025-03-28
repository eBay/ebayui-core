import type { AttrBoolean, AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import type { Input as DetailsInput } from "../ebay-details/component-browser";

export interface AccordionInput extends Omit<Marko.Input<"ul">, `on${string}`> {
    size?: "regular" | "large";
    "auto-collapse"?: AttrBoolean;
    "a11y-role-description"?: AttrString;
    details?: Marko.AttrTag<
        Omit<DetailsInput, "size" | "alignment" | `on${string}`>
    >;
    "on-toggle"?: (event: { originalEvent: Event; open: boolean }) => void;
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
}

interface State {
    index: number;
}

export interface Input extends WithNormalizedProps<AccordionInput> {}

class Accordion extends Marko.Component<Input, State> {
    onInput(input: Input) {
        this.state = {
            index: -1,
        };
    }

    handleToggle(
        index: number,
        event: { originalEvent: Event; open: boolean },
    ) {
        const { autoCollapse } = this.input;
        if (autoCollapse && event.open) {
            this.state.index = index;
        }

        this.emit("toggle", {
            originalEvent: event.originalEvent,
            open: (event.originalEvent.target as HTMLDetailsElement).open,
            index: index,
        });
    }
}

export default Accordion;
