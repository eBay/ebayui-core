import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import DialogBase, {
    type Input as BaseInput,
} from "../components/ebay-dialog-base/component";

interface DrawerDialogInput extends BaseInput {
    "a11y-maximize-text"?: AttrString;
    "a11y-minimize-text"?: AttrString;
    "no-handle"?: boolean;
    expanded?: boolean;
    "on-expanded"?: () => void;
    "on-collapsed"?: () => void;
    "on-open"?: () => void;
    "on-close"?: () => void;
}

export interface Input extends WithNormalizedProps<DrawerDialogInput> {}

interface State {
    expanded: boolean;
}

class DrawerDialog extends Marko.Component<Input, State> {
    declare touches: Pick<Touch, "identifier" | "pageY">[];

    setExpandedState(isExpanded: boolean) {
        if (isExpanded !== this.state.expanded) {
            this.state.expanded = isExpanded;
            if (isExpanded) {
                this.emit("expanded");
            } else {
                this.emit("collapsed");
            }
        }
    }

    handleExpand() {
        this.setExpandedState(!this.state.expanded);
    }

    handleScroll() {
        this.setExpandedState(true);
    }

    handleTouchStart(event: TouchEvent) {
        const touches = event.changedTouches;
        this.touches = [];
        // Sometimes there can be multiple touches on an object.
        // This saves the current touches when the user begins to tap on the handle
        for (let i = 0; i < touches.length; i++) {
            const { identifier, pageY } = touches[i];
            this.touches.push({
                identifier,
                pageY,
            });
        }
    }

    handleTouchMove(event: TouchEvent) {
        // This will verify that a given touch moved about 30px up/down from the handle
        // If so, then it will either expand or collapse the drawer.
        // It uses all the saved touch start events
        if (this.touches.length) {
            for (let i = 0; i < event.changedTouches.length; i++) {
                const current = event.changedTouches[i];
                const compare = this.touches.findIndex(
                    (item) => item.identifier === current.identifier,
                );
                const diff = current.pageY - this.touches[compare].pageY;

                if (diff > 30) {
                    // Drag down, collpase
                    if (this.state.expanded) {
                        this.setExpandedState(false);
                    } else {
                        (this.getComponent("dialog") as DialogBase).state.open =
                            false;
                    }
                    this.handleTouchEnd(event);
                } else if (diff < -30) {
                    this.setExpandedState(true);
                    this.handleTouchEnd(event);
                }
            }
        }
    }

    handleTouchEnd(event: TouchEvent) {
        // Remove all matching touches from the list when the touch is over.
        // This is done this way in case a finger is lifted up before another finger
        for (let i = 0; i < event.changedTouches.length; i++) {
            const current = event.changedTouches[i];
            const idx = this.touches.findIndex(
                (item) => item.identifier === current.identifier,
            );
            if (idx > -1) {
                this.touches.splice(idx, 1);
            }
        }
    }

    onMount() {
        this.touches = [];
    }

    onInput(input: Input) {
        this.state = { expanded: input.expanded || false };
    }
}

export default DrawerDialog;
