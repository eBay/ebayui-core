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
            (input.button || []) as SegmentedButton[]
        ).findIndex((button) => button.selected);
        if (selectedIndex === -1) {
            selectedIndex = 0;
        }
        this.state.selectedIndex = selectedIndex;
    }

    onButtonClick(index: number, ev: PointerEvent) {
        if (index !== this.state.selectedIndex) {
            this.state.selectedIndex = index;
            const value = this.input.button
                ? [...this.input.button][index].value || undefined
                : undefined;
            this.emit("change", {
                index,
                value,
                originalEvent: ev,
            } satisfies SegmentedButtonsEvent);
        }
    }
}

export default SegmentedButtons;
