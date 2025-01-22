import * as eventUtils from "../../common/event-utils";
import type { WithNormalizedProps } from "../../global";
import type { Input as TooltipBaseInput } from "../components/ebay-tooltip-base/component-browser";
import type { Input as TooltipOverlayInput } from "../components/ebay-tooltip-overlay/component-browser";

interface TooltipInput extends Omit<Marko.HTML.Span, `on${string}`> {
    open?: boolean;
    "no-hover"?: TooltipBaseInput["noHover"];
    host?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    heading?: TooltipOverlayInput["heading"];
    content?: TooltipOverlayInput["content"];
    pointer?: TooltipBaseInput["pointer"];
    placement?: TooltipBaseInput["placement"];
    offset?: TooltipBaseInput["offset"];
    "not-inline"?: TooltipBaseInput["not-inline"];
    "no-shift"?: TooltipBaseInput["no-shift"];
    "no-flip"?: TooltipBaseInput["no-flip"];
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
