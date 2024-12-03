import type { AttrBoolean, AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import type { Input as DetailsInput } from "../ebay-details/component-browser";

export interface AccordionInput extends Omit<Marko.Input<"ul">, `on${string}`> {
    size?: "regular" | "large";
    "auto-collapse"?: AttrBoolean;
    "a11y-role-description"?: AttrString;
    items?: Marko.AttrTag<
        Omit<DetailsInput, "size" | "alignment" | "layout" | `on${string}`>
    >;
    "on-toggle"?: (event: { originalEvent: Event; open: boolean }) => void;
}

export interface Input extends WithNormalizedProps<AccordionInput> {}
class Accordion extends Marko.Component<Input> {
    handleToggle(event: { originalEvent: Event; open: boolean }) {
        
        const { autoCollapse } = this.input;
        if(autoCollapse && event.open) {
            const accordion = this.getEl("accordion-root") as HTMLUListElement;
            const detailsElements = accordion.querySelectorAll("details");
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
        });
    }
}

export default Accordion;
