import Expander from "makeup-expander";
import * as scrollKeyPreventer from "makeup-prevent-scroll-keys";
import type { Input as ListboxInput } from "../ebay-listbox/component";
import type Listbox from "../ebay-listbox/component";
import type { ChangeEvent } from "../ebay-listbox/component";
import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

interface ListboxButtonInput extends Omit<Marko.Input<"div">, `on${string}`> {
    options?: ListboxInput["options"];
    name?: ListboxInput["name"];
    "list-selection"?: ListboxInput["listSelection"];
    "prefix-id"?: string;
    "unselected-text"?: AttrString;
    variant?: "standard" | "form";
    truncate?: boolean;
    fluid?: boolean;
    borderless?: boolean;
    "floating-label"?: AttrString;
    disabled?: boolean;
    "button-name"?: string;
    "a11y-icon-text"?: string;
    split?: string;
    invalid?: boolean;
    hasError?: boolean;
    "a11y-icon-prefix-text"?: AttrString;
    "prefix-label"?: AttrString;
    "postfix-label"?: AttrString;
    "collapse-on-select"?: boolean;
    "on-expand"?: () => void;
    "on-collapse"?: () => void;
    "on-change"?: (event: ChangeEvent) => void;
}

export interface Input extends WithNormalizedProps<ListboxButtonInput> {}

interface State {
    selectedIndex: number;
}

class ListboxButton extends Marko.Component<Input, State> {
    declare _expander: any;

    handleExpand() {
        (this.getComponent("options") as Listbox).elementScroll();
        this.emit("expand");
    }

    handleCollapse() {
        (this.getEl("button") as HTMLButtonElement).focus();
        this.emit("collapse");
    }

    handleListboxChange(event: ChangeEvent) {
        if (this.input.collapseOnSelect !== false) {
            this._expander.expanded = false;
        }
        const selectedIndex = event.index;
        this.state.selectedIndex = selectedIndex;
        this.emit("change", event);
    }

    handleListboxEscape() {
        this._expander.expanded = false;
    }

    onCreate() {
        this.state = {
            selectedIndex: -1,
        };
    }

    onInput(input: Input) {
        input.options = input.options || ([] as any);
        this.state.selectedIndex = -1;
        let i = 0;
        for (const option of input.options || []) {
            if (option.selected) {
                this.state.selectedIndex = i;
                break;
            }
            i++;
        }
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._cleanupMakeup();
        }
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _setupMakeup() {
        const { input } = this;

        // This `as any` is here for while `options` is coerced into an array from `marko-tag.json`.
        // After we move to the full `iterator` we can switch to `if (input.options && !input.disabled)`
        if ((input.options as any)?.length && !input.disabled) {
            const container = this.getEl("container");

            this._expander = new Expander(container, {
                alwaysDoFocusManagement: true,
                autoCollapse: true,
                expandOnClick: true,
                simulateSpacebarClick: true,
                contentSelector: ".listbox-button__listbox",
                hostSelector: ".listbox-button__control",
                expandedClass: "listbox-button--expanded",
                focusManagement: "content",
            });

            scrollKeyPreventer.add(this.getEl("button"));
        }
    }

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
    }
}

export default ListboxButton;
