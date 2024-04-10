export interface LegendItem {
    name: string;
    value: number | string | undefined;
    symbolClass?: string;
}

export interface Input {
    focusIndex: number | null;
    items: LegendItem[];
    "on-focus": (index: number) => void;
    "on-blur": () => void;
}

export default class ChartLegend extends Marko.Component<Input> {
    handleFocus(id: number) {
        this.emit("focus", id);
    }

    handleBlur() {
        this.emit("blur");
    }
}