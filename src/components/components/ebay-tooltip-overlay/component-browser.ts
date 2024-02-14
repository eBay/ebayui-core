import type { AttrClass, AttrString } from "marko/tags-html";
import { typeRoles } from "./constants";
import type { WithNormalizedProps } from "../../../global";

interface TooltipOverlayInput {
    "style-top"?: string;
    "style-left"?: string;
    "style-right"?: string;
    "style-bottom"?: string;
    heading?: Marko.Input<"span"> & {
        as: Marko.NativeTags;
        renderBody: Marko.Body;
    };
    id?: string;
    type: keyof typeof typeRoles;
    content?: Marko.AttrTag<Marko.Input<"span">>;
    "a11y-close-text"?: AttrString;
    footer?: Marko.AttrTag<
        Marko.Renderable & {
            class?: AttrClass;
        }
    >;
    "on-overlay-close"?: (event: { originalEvent: Event }) => void;
}

export interface Input extends WithNormalizedProps<TooltipOverlayInput> {}

class TooltipOverlay extends Marko.Component<Input> {
    handleCloseButton(originalEvent: Event) {
        this.emit("overlay-close", { originalEvent });
    }
}

export default TooltipOverlay;
