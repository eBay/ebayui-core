import type { WithNormalizedProps } from "../../global";

export interface DetailsInput extends Omit<Marko.HTML.Details, `on${string}`> {
    text: string;
    size?: "regular" | "small";
    alignment?: "regular" | "center";
    as?: keyof Marko.NativeTags;
    "on-toggle"?: (event: { originalEvent: Event; open: boolean }) => void;
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
}

export interface Input extends WithNormalizedProps<DetailsInput> {}

class Details extends Marko.Component<Input> {
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

export default Details;
