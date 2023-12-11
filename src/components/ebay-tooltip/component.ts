import * as eventUtils from "../../common/event-utils";
import type { Input as TooltipBaseInput } from "../components/ebay-tooltip-base/component-browser";
import type { Input as TooltipOverlayInput } from "../components/ebay-tooltip-overlay/component-browser";

interface TooltipInput extends Omit<Marko.Input<"span">, `on${string}`> {
    open?: boolean;
    "no-hover"?: TooltipBaseInput["noHover"];
    host?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    pointer?: TooltipOverlayInput["pointer"];
    "style-left"?: TooltipOverlayInput["styleLeft"];
    "style-right"?: TooltipOverlayInput["styleRight"];
    "style-top"?: TooltipOverlayInput["styleTop"];
    "style-bottom"?: TooltipOverlayInput["styleBottom"];
    heading?: TooltipOverlayInput["heading"];
    content?: TooltipOverlayInput["content"];
    "on-expand"?: () => void;
    "on-collapse"?: () => void;
}

export interface Input extends WithNormalizedProps<TooltipInput> {}

interface State {
    open: boolean;
}

class Tooltip extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            open: false,
        };
    }
    onInput(input: Input) {
        if (input.open === true || input.open === false) {
            this.state.open = input.open;
        }
    }
    handleExpand() {
        this.state.open = true;
        this.emit("expand");
    }
    handleCollapse() {
        this.state.open = false;
        this.emit("collapse");
    }
    handleKeydown(e: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.state.open = false;
        });
    }
}

export default Tooltip;
