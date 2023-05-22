export interface Input extends Omit<Marko.Input<"details">, `on${string}`> {
    toJSON?: any;
    text: string;
    size?: "regular" | "small";
    alignment?: "regular" | "center";
    as?: keyof Marko.NativeTags;
    "on-toggle"?: (event: { originalEvent: Event; open: boolean }) => void;
    onToggle?: this["on-toggle"];
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
    onClick?: this["on-click"];
}

export default class extends Marko.Component<Input> {
    toggleDetails(ev: Event) {
        this.emit("toggle", {
            originalEvent: ev,
            open: (this.getEl("root") as HTMLDetailsElement).open,
        });
    }
    clickDetails(ev: MouseEvent) {
        this.emit("click", { originalEvent: ev });
    }
}
