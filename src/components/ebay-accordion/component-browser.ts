import type { AttrBoolean, AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import type { Input as DetailsInput } from "../ebay-details/component-browser";

export interface AccordionInput extends Omit<Marko.Input<"ul">, `on${string}`> {
    size?: "regular" | "large";
    "auto-collapse"?: AttrBoolean;
    "a11y-role-description"?: AttrString;
    details?: Marko.AttrTag<
        Omit<DetailsInput, "size" | "alignment" | "layout" | `on${string}`>
    >;
    "on-toggle"?: (event: { originalEvent: Event; open: boolean }) => void;
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
}

export interface Input extends WithNormalizedProps<AccordionInput> {}
class Accordion extends Marko.Component<Input> {
    handleToggle(event: { originalEvent: Event; open: boolean }) {
        
        const { autoCollapse } = this.input;
        const accordion = this.getEl("accordion-root") as HTMLUListElement;
        const detailsElements = Array.from(accordion.querySelectorAll("details"));
        const index = detailsElements.indexOf(
            event.originalEvent.target as HTMLDetailsElement,
        );

        if (autoCollapse && event.open) {
            detailsElements.forEach((details: HTMLDetailsElement) => {
                // Close the <details> element by setting its open attribute to false
                if (details !== event.originalEvent.target) {
                    details.open = false;
                }
            });
        }

        this.emit("toggle", {
            originalEvent: event.originalEvent,
            open: (event.originalEvent.target as HTMLDetailsElement).open,
            index,
        });
    }
}

export default Accordion;
