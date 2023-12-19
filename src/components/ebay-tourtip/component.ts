import type { Input as TooltipBaseInput } from "../components/ebay-tooltip-base/component-browser";
import type { Input as TooltipOverlayInput } from "../components/ebay-tooltip-overlay/component-browser";

interface TourtipInput extends Omit<Marko.Input<"span">, `on${string}`> {
    open?: boolean;
    "no-hover"?: TooltipBaseInput["noHover"];
    host?: Marko.Input<"span">;
    pointer?: TooltipOverlayInput["pointer"];
    "style-left"?: TooltipOverlayInput["styleLeft"];
    "style-right"?: TooltipOverlayInput["styleRight"];
    "style-top"?: TooltipOverlayInput["styleTop"];
    "style-bottom"?: TooltipOverlayInput["styleBottom"];
    heading?: TooltipOverlayInput["heading"];
    content?: TooltipOverlayInput["content"];
    "a11y-close-text"?: TooltipOverlayInput["a11yCloseText"];
    footer?: TooltipOverlayInput["footer"] & {
        index?: string;
    };
    "on-expand"?: () => void;
    "on-collapse"?: () => void;
}

export interface Input extends WithNormalizedProps<TourtipInput> {}

interface State {
    expanded: boolean;
}

class Tourtip extends Marko.Component<Input, State> {
    handleCollapse({ originalEvent }: { originalEvent: Event }) {
        if (this.state.expanded) {
            this.state.expanded = false;
            this.emit("collapse", { originalEvent });
        }
    }

    handleExpand({ originalEvent }: { originalEvent: Event }) {
        if (!this.state.expanded) {
            this.state.expanded = true;
            this.emit("expand", { originalEvent });
        }
    }
    onInput(input: Input) {
        if (input.open === false || input.open === true) {
            this.state.expanded = input.open;
        }
    }

    onCreate() {
        this.state = {
            expanded: true,
        };
    }
}

export default Tourtip;
