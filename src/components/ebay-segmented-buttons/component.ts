import type {
    Input,
    SegmentedButton,
    SegmentedButtonsEvent,
} from "./index.marko";

interface State {
    selectedIndex: number;
}

class SegmentedButtons extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selectedIndex: 0,
        };
    }

    onInput(input: Input) {
        let selectedIndex = (
            (input.buttons || []) as SegmentedButton[]
        ).findIndex((button) => button.selected);
        if (selectedIndex === -1) {
            selectedIndex = 0;
        }
        this.state.selectedIndex = selectedIndex;
    }

    onButtonClick(index: number, ev: PointerEvent) {
        if (index !== this.state.selectedIndex) {
            this.state.selectedIndex = index;
            this.emit("change", {
                index,
                value:
                    ((this.input.buttons as SegmentedButton[])[index] || {})
                        .value || undefined,
                originalEvent: ev,
            } satisfies SegmentedButtonsEvent);
        }
    }
}

export default SegmentedButtons;
