import type { WithNormalizedProps } from "../../global";
import type { Input as TooltipBaseInput } from "../components/ebay-tooltip-base/component-browser";
import type { Input as TooltipOverlayInput } from "../components/ebay-tooltip-overlay/component-browser";

interface TourtipInput extends Omit<Marko.HTML.Span, `on${string}`> {
    open?: boolean;
    "no-hover"?: TooltipBaseInput["noHover"];
    host?: Marko.AttrTag<Marko.HTML.Span>;
    offset?: TooltipBaseInput["offset"];
    pointer?: TooltipBaseInput["pointer"];
    placement?: TooltipBaseInput["placement"];
    heading?: TooltipOverlayInput["heading"];
    content?: TooltipOverlayInput["content"];
    "a11y-close-text"?: TooltipOverlayInput["a11yCloseText"];
    "no-flip"?: TooltipBaseInput["noFlip"];
    "not-inline"?: TooltipBaseInput["not-inline"];
    "no-shift"?: TooltipBaseInput["no-shift"];
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
