import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import EbayTooltipBase from "../components/ebay-tooltip-base/component-browser";
import type { Input as TooltipBaseInput } from "../components/ebay-tooltip-base/component-browser";

interface InfotipInput extends Omit<Marko.HTML.Span, `on${string}`> {
    open?: boolean;
    variant?: "modal" | "default";
    offset?: TooltipBaseInput["offset"];
    pointer?: TooltipBaseInput["pointer"];
    placement?: TooltipBaseInput["placement"];
    disabled?: boolean;
    icon?: Marko.AttrTag<{ renderBody: Marko.Renderable }>;
    heading?: Marko.AttrTag<
        Marko.HTML.Span & {
            as?: keyof Marko.NativeTags;
            renderBody?: Marko.Renderable;
        }
    >;
    "no-flip"?: TooltipBaseInput["no-flip"];
    "not-inline"?: TooltipBaseInput["not-inline"];
    "no-shift"?: TooltipBaseInput["no-shift"];
    content: Marko.AttrTag<Marko.HTML.Span>;
    "a11y-close-button-text"?: AttrString;
    "on-expand"?: () => void;
    "on-collapse"?: () => void;
}

export interface Input extends WithNormalizedProps<InfotipInput> {}

interface State {
    open: boolean;
}

class Infotip extends Marko.Component<Input, State> {
    onInput(input: Input) {
        this.state = {
            open: input.open || false,
        };
    }

    setOpen(isOpen: boolean) {
        if (this.input.variant === "modal") {
            this.state.open = isOpen;
        }
    }

    handleOpenModal() {
        this.setOpen(true);
    }

    handleExpand() {
        this.setOpen(true);
        this.emit("expand");
    }

    handleOverlayClose() {
        (this.getComponent("base") as EbayTooltipBase).collapse();
    }

    isExpanded() {
        return (this.getComponent("base") as EbayTooltipBase).isExpanded();
    }

    expand() {
        (this.getComponent("base") as EbayTooltipBase).expand();
    }

    collapse() {
        (this.getComponent("base") as EbayTooltipBase).collapse();
    }

    handleCollapse() {
        this.setOpen(false);

        (this.getEl("host") as HTMLButtonElement).focus();
        this.emit("collapse");
    }
}

export default Infotip;
